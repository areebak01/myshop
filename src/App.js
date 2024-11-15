import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ShowCart from "./components/ShowCart";

function App() {
  const [products, setProducts] = useState([]);
  const [mycart, setMyCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addtocart = (product) => {
    setMyCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header cartcount={mycart.length} />}>
          <Route
            index
            element={<ProductListing products={products} addtocart={addtocart} />}
          />
          <Route path="cart" element={<ShowCart mycart={mycart} />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
