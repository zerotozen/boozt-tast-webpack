import { SearchBarActionTypes } from "./search-bar.types";

export const searchBarContent = (item) => ({
  type: SearchBarActionTypes.SEARCH_ITEM_CONTENT,
  payload: item,
});

export const addContentToSearchBar = (item, array) => ({
  type: SearchBarActionTypes.ADD_CONTENT_TO_SEARCHBAR,
  payload: item,
  array,
});
