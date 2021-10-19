export const searchItems = (searchInput, collections) => {
    if (searchInput !== "") {
        const filteredData = collections.filter((item) => {
          return (
            item.brand_name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.product_name.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
        setFilteredResults(filteredData);
      } else {
        setFilteredResults(currentData);
      }
}