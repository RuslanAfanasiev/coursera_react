import React from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const products = [
    { id: 1, name: "Product 1", price: 54 },
    { id: 2, name: "Product 2", price: 67 },
    { id: 3, name: "Product 3", price: 25 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">E-commerce Application</h1>
      </nav>
      <div className="product-list">
        <h2 className="product-list-title">Product List</h2>
        <ul className="product-list-items">
          {products.map((product) => (
            <li key={product.id} className="product-list-item">
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                className={`add-to-cart-btn ${cartItems.some((item) => item.id === product.id) ? "disabled" : ""}`}
                onClick={() => handleAddToCart(product)}
                disabled = {cartItems.some((item) => item.id === product.id)}
              >
                {cartItems.some(item => item.id === product.id) ? "Added" : "Add to Cart"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
