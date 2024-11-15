import React from "react";
import '../ProductListing.css';

const ProductListing = ({ products, addtocart }) => {
  return (
    <div>
      <h1>Product Listing</h1>
      <div className="products-list">
        {products.map((product) => (
          <div className="product-container" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addtocart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
