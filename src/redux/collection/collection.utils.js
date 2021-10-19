export const sortProductsByLowerPrice = (collectionData) => {
  return collectionData.sort(function (a, b) {
    if (a.actual_price < b.actual_price) return -1;
    if (a.actual_price > b.actual_price) return 1;
    return 0;
  });
};

export const sortProductsByHigherPrice = (collectionData) => {
  return collectionData.sort(function (a, b) {
    if (a.actual_price > b.actual_price) return -1;
    if (a.actual_price < b.actual_price) return 1;
    return 0;
  });
};

// export const sortProductsByBrand = async (input) => {
//   const collectionData = await fetch("product_list.json").then((res) =>
//     res.json().then((res) => {
//       return res;
//     })
//   );

//   console.log("la hice bien)", collectionData);
//   return collectionData?.filter((brand) => brand.brand_name === input);
// };
