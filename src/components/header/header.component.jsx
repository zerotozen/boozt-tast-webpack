import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

import { withRouter } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./header.styles.scss";

function Header({ toggleCartHidden, hidden, history }) {
  return (
    <div className="header__container">
      <div className="header__left-side">
        <div className="header__icon-menu">
          <GiHamburgerMenu className="header__icon" size={25} />
          <span>Menu</span>
        </div>
      </div>

      <div className="header__middle-side">
        <img
          onClick={() => history.push("/")}
          className="header__logo"
          src={logo}
          alt=""
        />
      </div>
      <div className="header__right-side">
        <AiOutlineUser
          onClick={() => history.push("/signin")}
          className="header__icon"
          size={23}
        />

        <AiOutlineHeart
          onClick={() => history.push("/favourites")}
          className="header__icon"
          size={23}
        />
        <BiShoppingBag
          onClick={toggleCartHidden}
          className="header__icon"
          size={23}
        />
        {hidden ? " " : <CartDropdown />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
