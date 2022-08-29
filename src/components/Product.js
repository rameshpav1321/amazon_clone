import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions";
const Product = ({ id, title, image, price, rating, specfication, detail }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const item = {
      id,
      title,
      image,
      rating,
      specfication,
      detail,
      price,
    };
    dispatch(addToBasket(item));
  };
  return (
    <div className="product">
      <div className="info">
        <Link to={`/product/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addItemToBasket}>
        <i>
          <ShoppingCartOutlined />
        </i>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
