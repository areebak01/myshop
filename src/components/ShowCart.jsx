import React from "react";

const ShowCart = ({ mycart }) => {
  return (
    <div>
      <h1>My Cart</h1>
      {mycart.length > 0 ? (
        <ul>
          {mycart.map((item) => (
            <li key={item.id} style={{ margin: "10px 0" }}>
              <img src={item.image} alt={item.title} style={{ width: "50px", marginRight: "10px" }} />
              {item.title} - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default ShowCart;
