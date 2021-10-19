import { addContentToSearchBar } from "./search-bar.actions";
import { SearchBarActionTypes } from "./search-bar.types";

const INITIAL_STATE = {
  searchInput: "",
  filteredResults: [],
};

const searchBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchBarActionTypes.SEARCH_ITEM_CONTENT:
      return {
        ...state,
        searchInput,
      };
    case SearchBarActionTypes.ADD_CONTENT_TO_SEARCHBAR:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SearchBarActionTypes.SEARCH_ITEMS:
      return {
        ...state,
        filteredResults: searchItems(action.payload),
      };
    default:
      return state;
  }
};

export default searchBarReducer;
