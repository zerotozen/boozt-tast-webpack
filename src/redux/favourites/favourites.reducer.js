import { FavouritesActionTypes } from "./favourites.types.js";
import {
  addItemToFavouriteList,
  removeFromFavouritesList,
  updateFavouriteState,
} from "./favourites.utils.js";

const INITIAL_STATE = {
  favouritesList: [],
  favouriteState: false,
};

const favouriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavouritesActionTypes.ADD_ITEM:
      return {
        ...state,
        favouritesList: addItemToFavouriteList(
          state.favouritesList,
          action.payload
        ),
      };
    case FavouritesActionTypes.REMOVE_ITEM:
      return {
        ...state,
        favouritesList: removeFromFavouritesList(
          state.favouritesList,
          action.payload
        ),
      };

    case FavouritesActionTypes.CLEAR_ITEM_LIST:
      return {
        ...state,
        favouritesList: addItemToFavouforites(
          state.favouritesList,
          action.payload
        ),
      };
    case FavouritesActionTypes.UPDATE_FAVOURITE_STATE:
      return {
        ...state,
        favouriteState: updateFavouriteState(
          state.favouritesList,
          action.payload
        ),
      };

    default:
      return state;
  }
};

export default favouriteReducer;
