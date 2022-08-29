import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { removeFromCart } from "../redux/actions";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  let dispatch = useDispatch();
  const removeItemsFromCart = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-image" />
      <div className="checkout-product-info">
        <div className="checkout-product-title">{title}</div>
        <p className="checkout-product-price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐️</p>
            ))}
        </div>
        <button onClick={removeItemsFromCart}>
          <i>
            <ShoppingCartOutlinedIcon />
          </i>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
