import { useState } from "react";

function FlavorItem({ flavor, addToOrder }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="flavor-card"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={flavor.image} alt={flavor.name} />
      <h3>{flavor.name}</h3>
      <p className="price">{flavor.price}</p>

      {showDescription && <p className="description">{flavor.description}</p>}

      <button onClick={() => addToOrder(flavor)}>Add to Order</button>
    </div>
  );
}

export default FlavorItem;