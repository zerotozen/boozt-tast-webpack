import { useState } from "react";

import { connect } from "react-redux";
import {
  sortProductsByHigherPrice,
  sortProductsByLowerPrice,
  fetchCollectionsStartAsync,
} from "../../redux/collection/collection.actions.js";

import CollectionCard from "../collection-card/collection-card.components.jsx";
import { Loader } from "../loader/loader.component.jsx";
import Pagination from "../pagination/pagination.component.jsx";
import { SearchFilter } from "../search-filter/search-filter.component.jsx";

import Select from "react-select";
import { filterOptions } from "../../data/select-filter.options.js";
import { brandOptions } from "../../data/select-brands.options.js";

import "./overview-collection.styles.scss";

function OverviewCollection({
  dataToRender,
  sortProductsByLowerPrice,
  sortProductsByHigherPrice,
  fetchCollectionsStartAsync,
}) {
  const [sortedOption, setSortedOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  //total number of products
  let numOfRecords = dataToRender?.length;
  let maxProductsPerPage = 20;
  const totalPages = Math.ceil(numOfRecords / maxProductsPerPage);
  const firstPage = 0;
  const lastPage = 97;

  const onPageChanged = (page) => {
    if (page !== firstPage && page !== lastPage) setCurrentPage(page);
  };

  const currentData = dataToRender?.slice(
    (currentPage - 1) * maxProductsPerPage,
    (currentPage - 1) * maxProductsPerPage + maxProductsPerPage
  );

  const sortByPrice = (input) => {
    const selectedOption = input.value;
    setSortedOption(selectedOption);
    sortProducts(selectedOption);
  };

  const sortProducts = (sortOption) => {
    if (sortOption === "sortByLowerPrice") {
      sortProductsByLowerPrice();
    }
    if (sortOption === "sortByHigherPrice") {
      sortProductsByHigherPrice();
    }
    if (sortOption === "") {
      fetchCollectionsStartAsync();
    }
  };

  const searchCollectionItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = dataToRender.filter((item) => {
        return (
          item.brand_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.product_name.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(currentData);
    }
  };
  const filterByBrandName = (inputBrand) => {
    const brandToFilter = inputBrand.value;
    setSearchInput(brandToFilter);
    if (inputBrand !== "") {
      const filteredData = dataToRender.filter((item) => {
        return item.brand_name === brandToFilter;
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(currentData);
    }
  };

  const clearSearchInput = () => {
    setSearchInput("");
    setFilteredResults([]);
  };

  if (!dataToRender) {
    return <Loader />;
  }
  return (
    <div className="overview-collection__container">
      <div className="overview-collection__header-container">
        <div className="overview-collection__header-subcontainer">
          <SearchFilter
            placeholder="Search Collection Items"
            onInputChange={searchCollectionItems}
            searchInput={searchInput}
            clearSearchInput={clearSearchInput}
          />
          <Select
            className="overview-collection__selector"
            onChange={sortByPrice}
            options={filterOptions}
            placeholder={"Sort By Price"}
          />
          <Select
            className="overview-collection__selector"
            onChange={filterByBrandName}
            options={brandOptions}
            placeholder={"Sort By Brand"}
          />
        </div>
        <Pagination
          onPageChanged={onPageChanged}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      <div className="overview-collection__body">
        {searchInput.length > 1 && filteredResults.length !== 0 ? (
          filteredResults?.map((item, idx) => {
            return (
              <div className="" key={idx}>
                <CollectionCard item={item} />
              </div>
            );
          })
        ) : filteredResults.length === 0 && searchInput.length >= 1 ? (
          <h1>Item Not Found</h1>
        ) : currentData.length > 0 ? (
          currentData?.map((item, idx) => {
            return (
              <div className="" key={idx}>
                <CollectionCard item={item} />
              </div>
            );
          })
        ) : (
          <h1>There is not Items</h1>
        )}
      </div>
      <Pagination
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  sortProductsByLowerPrice: () => {
    dispatch(sortProductsByLowerPrice());
  },
  sortProductsByHigherPrice: () => {
    dispatch(sortProductsByHigherPrice());
  },
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(OverviewCollection);
