import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

function OrderList({ order, removeFromOrder }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = order.reduce((sum, item) => {
      const numericPrice = parseFloat(item.price.replace("$", ""));
      return sum + numericPrice * item.quantity;
    }, 0);

    setTotal(calculatedTotal);
  }, [order]);

  return (
    <div className="order-wrapper">
      <h2>Your Order</h2>

      <div className="order-list">
        {order.length === 0 ? (
          <p>No items in your order.</p>
        ) : (
          <>
            {order.map((item) => (
              <OrderItem
                key={item.id}
                item={item}
                removeFromOrder={removeFromOrder}
              />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderList;