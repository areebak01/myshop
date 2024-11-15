import React from "react";

const ProductListing = ({ products, addtocart }) => {
  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ margin: "10px 0" }}>
            <img src={product.image} alt={product.title} style={{ width: "50px", marginRight: "10px" }} />
            {product.title} - ${product.price.toFixed(2)}
            <button onClick={() => addtocart(product)} style={{ marginLeft: "10px" }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
