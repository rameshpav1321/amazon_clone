import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import SubTotal from "../components/SubTotal";

const Checkout = () => {
  const { basket, user } = useSelector((state) => state.data);
  // console.log("checkout", basket);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user.user.email : "Guest"}</h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "Your shopping cart is empty"
              : "Your shopping cart"}
          </h2>
          {/* checkout product */}
          {basket &&
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className="checkout-right">
        {/* sub-total */}
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
