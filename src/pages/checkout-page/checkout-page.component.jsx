import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import CustomButton from "../../components/custom-button/custom-button.component.jsx";

import "./checkout-page.styles.scss";

function CheckoutPage({ cartItems }) {
  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <div className="checkout-page__header-block">
          <span>Products</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Description</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Price (€)</span>
        </div>
        <div className="checkout-page__header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems?.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="checkout-page__total">
        <span>TOTAL: $</span>
      </div>
      <div className="checkout-page__buttom">
        <CustomButton>Process Payment</CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
