import { connect } from "react-redux";
import {
  addItemToFavouriteList,
  removeFromFavouritesList,
} from "../../redux/favourites/favourites.actions.js";

import { addItemtoCart } from "../../redux/cart/cart.action.js";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import "./collection-card.styles.scss";
import CustomButton from "../custom-button/custom-button.component.jsx";

import { Link } from "react-router-dom";

function CollectionCard({
  item,
  addItemToFavouriteList,
  removeFromFavouritesList,
  favouritesList,
  addItemToCart,
}) {
  const { product_name, brand_name, actual_price, filename, id } = item;
  const actualPrice = parseFloat(actual_price).toFixed(2);

  const addItem1 = (item) => {
    addItemToFavouriteList(item);
    removeFromFavouritesList(item);
  };

  return (
    <div className="collection-card__container">
      <div onClick={() => addItem1(item)}>
        <AiOutlineHeart className="collection-card__icon" size={20} />
        {favouritesList?.map((favouriteItem, idx) => {
          return favouriteItem.id === item.id ? (
            <AiFillHeart className="collection-card__icon" size={20} key={idx} />
          ) : null;
        })}
      </div>
      <div className="collection-card__title-contaier">
        <h3 className="collection-card__title">{product_name?.toUpperCase()}</h3>
      </div>
      <span>{brand_name}</span>
      <Link to={`/product/${id}`}>
        <img className="collection-card__image" src={filename} alt="" />
      </Link>
      <span className="collection-card__price">{actualPrice} €</span>
      <CustomButton onClick={() => addItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favouriteState: state.favourites.favouriteState,
  favouritesList: state.favourites.favouritesList,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToFavouriteList: (item) => {
    dispatch(addItemToFavouriteList(item));
  },
  removeFromFavouritesList: (item) => {
    dispatch(removeFromFavouritesList(item));
  },
  addItemToCart: (item) => dispatch(addItemtoCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionCard);
