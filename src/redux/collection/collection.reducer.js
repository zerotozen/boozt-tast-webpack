import { CollectionActionTypes } from "./collection.types.js";
import {
  sortProductsByLowerPrice,
  sortProductsByHigherPrice,
} from "./collection.utils.js";

const INITIAL_STATE = {
  collectionData: null,
  collectionDataCopy: null,
  isFetching: false,
  errorMessage: undefined,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.FILTER_BY_LOWER_PRICE:
      return {
        ...state,
        collectionData: sortProductsByLowerPrice(state.collectionData),
      };

    case CollectionActionTypes.FILTER_BY_HIGHER_PRICE:
      return {
        ...state,
        collectionData: sortProductsByHigherPrice(state.collectionData),
      };

    case CollectionActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collectionData: action.payload,
      };
    case CollectionActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default collectionReducer;
