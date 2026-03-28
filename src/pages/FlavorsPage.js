import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlavorCatalog from "../components/FlavorCatalog";
import OrderList from "../components/OrderList";

function FlavorsPage() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const savedOrder = localStorage.getItem("sweetScoopOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sweetScoopOrder", JSON.stringify(order));
  }, [order]);

  const addToOrder = (flavor) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.id === flavor.id);

      if (existingItem) {
        return prevOrder.map((item) =>
          item.id === flavor.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevOrder, { ...flavor, quantity: 1 }];
    });
  };

  const removeFromOrder = (id) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="flavors-page">
      <Header />

      <div className="content flavors-content">
        <FlavorCatalog addToOrder={addToOrder} />
        <OrderList order={order} removeFromOrder={removeFromOrder} />
      </div>

      <Footer />
    </div>
  );
}

export default FlavorsPage;