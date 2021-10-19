import { FavouritesActionTypes } from "./favourites.types";

export const addItemToFavouriteList = (item) => ({
  type: FavouritesActionTypes.ADD_ITEM,
  payload: item,
});

export const removeFromFavouritesList = (item) => ({
  type: FavouritesActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromFavouriteList = (item) => ({
  type: FavouritesActionTypes.CLEAR_ITEM_LIST,
  payload: item,
});

export const updateFavouriteState = (item) => ({
  type: FavouritesActionTypes.UPDATE_FAVOURITE_STATE,
  payload: item,
});
