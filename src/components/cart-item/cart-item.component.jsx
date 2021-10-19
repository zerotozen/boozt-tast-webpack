import { connect } from "react-redux";
import {
  addItemtoCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.action.js";

import "./cart-item.styles.scss";

import {
  MdClear,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function CartItem({
  item,
  addItemtoCart,
  removeItemFromCart,
  clearItemFromCart,
}) {
  const { filename, actual_price, product_name, quantity } = item;

  const actualPrice = parseFloat(actual_price).toFixed(2);
  const Total = actualPrice * quantity;
  return (
    <div className="cart-item__container">
      <div className="cart-item__-image-container">
        <img className="cart-item__image" src={filename} alt="item" />
      </div>

      <div className="cart-item__details-container">
        <span>
          {product_name > 10
            ? product_name.toLowerCase()
            : `${product_name.toLowerCase().slice(0, 20)}...`}
        </span>
        <span className="cart-item__price-container">
          <MdOutlineKeyboardArrowLeft
            onClick={() => removeItemFromCart(item)}
            size={23}
          />
          {quantity}
          <MdOutlineKeyboardArrowRight
            onClick={() => addItemtoCart(item)}
            size={23}
          />
          {Total.toFixed(2)}€
        </span>
      </div>
      <div className="cart-item__icon-container">
        <MdClear onClick={() => clearItemFromCart(item)} size={20} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemtoCart: (item) => dispatch(addItemtoCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
