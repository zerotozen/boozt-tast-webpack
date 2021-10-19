export const addItemToFavouriteList = (favouriteItems, favouriteItemToAdd) => {
  const existingFavouriteItem = favouriteItems.find(
    (favouriteItem) => favouriteItem.id === favouriteItemToAdd.id
  );

  if (existingFavouriteItem) {
    return favouriteItems.map((favouriteItem) =>
      favouriteItem.id === favouriteItemToAdd.id
        ? { ...favouriteItem, state: true }
        : favouriteItem
    );
  }

  return [...favouriteItems, { ...favouriteItemToAdd, state: false }];
};

export const removeFromFavouritesList = (
  favouriteItems,
  favouriteItemToRemove
) => {
  const existingFavouriteItem = favouriteItems.find(
    (favouriteItem) => favouriteItem.id === favouriteItemToRemove.id
  );

  if (existingFavouriteItem.state === true) {
    return favouriteItems.filter(
      (favouriteItem) => favouriteItem.id !== favouriteItemToRemove.id
    );
  }

  return favouriteItems.map((favouriteItem) =>
    favouriteItem.id === favouriteItem.id
      ? { ...favouriteItem, state: false }
      : favouriteItem
  );
};

export const updateFavouriteState1 = (favouritesList, favouriteItemToCheck) => {
  return favouritesList.map((item) => {
    item.id.includes(favouriteItemToCheck.id);
  });
};

export const updateFavouriteState = (favouritesList, favouriteItemToCheck) => {
  const existingFavouriteItem = favouritesList.find(
    (favouriteItem) => favouriteItem.id === favouriteItemToCheck.id
  );

  if (existingFavouriteItem) {
    return favouritesList.map((favouriteItem) =>
      favouriteItem.id === favouriteItemToCheck.id
        ? { ...favouriteItem, state: true }
        : favouriteItem
    );
  }

  return [...favouriteItems, { ...favouriteItemToAdd, state: false }];
};
