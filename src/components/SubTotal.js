import React from "react";
import "./SubTotal.css";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../utils/CartTotal";

const SubTotal = () => {
  const { basket, user } = useSelector((state) => state.data);
  // console.log("subtotal", basket);
  let history = useNavigate();
  const handleCheckout = () => {
    if (user) {
      history("/payment");
    } else {
      history("/login");
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items) : <h2>{value}</h2>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This orders contain a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={handleCheckout}>Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
