import { connect } from "react-redux";
import { addItemToFavouriteList } from "../../redux/favourites/favourites.actions.js";

import { addItemtoCart } from "../../redux/cart/cart.action.js";

import CustomButtom from "../custom-button/custom-button.component.jsx";

import Select from "react-select";

import { sizeOptions } from "../../data/select-sizes.options.js";

import { withRouter } from "react-router-dom";

import "./product-info.styles.scss";

function ProductInfo({ item, addItemToFavouriteList, addItemtoCart, history }) {
  const { product_name, brand_name, actual_price, filename, id } = item;
  return (
    <div className="product-info__container">
      <div className="product-info__left-side">
        <div className="product__image-container">
          <img className="product-info__image" src={filename} />
        </div>
      </div>
      <div className="product-info__right-side">
        <h1>{product_name.toUpperCase()}</h1>
        <div className="product-info__header-container">
          <span className="product-info__brand-name">{brand_name}</span>
        </div>
        <Select
          className="product-info__select"
          options={sizeOptions}
          placeholder={"Select Size"}
        />
        <div className="product-info__actual-price">{actual_price}€</div>
        <div className="product-info__buttons-container">
          <div className="product-info__button">
            <CustomButtom onClick={() => history.push("/checkout")}>
              Buy now
            </CustomButtom>
          </div>
          <div className="product-info__button">
            <CustomButtom onClick={() => addItemtoCart(item)}>
              Add to Cart
            </CustomButtom>
          </div>
          <div className="product-info__button">
            <CustomButtom onClick={() => addItemToFavouriteList(item)}>
              Add to Favourite{" "}
            </CustomButtom>
          </div>
        </div>
        <div className="product-info__body-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et
            officia porro repellat inventore dolor. Molestias architecto
            voluptates quos eligendi, consectetur iste eveniet fugit eius et
            minus molestiae quibusdam cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et
            officia porro repellat inventore dolor. Molestias architecto
            voluptates quos eligendi, consectetur iste eveniet fugit eius et
            minus molestiae quibusdam cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et
            officia porro repellat inventore dolor. Molestias architecto
            voluptates quos eligendi, consectetur iste eveniet fugit eius et
            minus molestiae quibusdam cumque.
          </p>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToFavouriteList: (item) => {
    dispatch(addItemToFavouriteList(item));
  },
  addItemtoCart: (item) => dispatch(addItemtoCart(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(ProductInfo));
