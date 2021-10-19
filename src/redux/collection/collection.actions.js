import { CollectionActionTypes } from "./collection.types.js";

export const sortProductsByLowerPrice = () => ({
  type: CollectionActionTypes.FILTER_BY_LOWER_PRICE,
});

export const sortProductsByHigherPrice = () => ({
  type: CollectionActionTypes.FILTER_BY_HIGHER_PRICE,
});

export const fetchCollectionsStart = () => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: CollectionActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    fetch("product_list.json")
      .then((res) =>
        res.json().then((res) => {
          dispatch(fetchCollectionsSuccess(res));
        })
      )
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
