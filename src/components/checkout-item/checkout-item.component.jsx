import React from "react";
import { connect } from "react-redux";

import {
  addItemtoCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.action.js";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  addItemtoCart,
  removeItemFromCart,
  clearItemFromCart,
}) => {
  const { product_name, filename, actual_price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item__image">
        <img src={filename} alt="item" />
      </div>
      <span className="checkout-item__name">{product_name}</span>
      <span className="checkout-item__quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="checkout-item__value">{quantity}</span>
        <div className="checkout-item__arrow" onClick={() => addItemtoCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="checkout-item__price">{actual_price}</span>
      <div
        className="checkout-item__remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapToDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemtoCart: (item) => dispatch(addItemtoCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapToDispatchToProps)(CheckoutItem);
