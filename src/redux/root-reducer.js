import { combineReducers } from "redux";

import collectionReducer from "./collection/collection.reducer.js";
import favouriteReducer from "./favourites/favourites.reducer.js";
import cartReducer from "./cart/cart.reducer.js";
import searchBarReducer from "./search-bar/search-bar.reducer.js";

export default combineReducers({
  collection: collectionReducer,
  favourites: favouriteReducer,
  cart: cartReducer,
  searchBar: searchBarReducer,
});
