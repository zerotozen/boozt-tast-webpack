import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import "./cart-dropdown.styles.scss";

function CartDropdown({ cartItems, history, toggleCartHidden }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__cart-items">
        {cartItems?.length ? (
          cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cart-dropdown__empty-message">Yor cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
