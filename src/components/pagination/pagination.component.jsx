import React from "react";
import { connect } from "react-redux";

import Select from "react-select";

import "./pagination.styles.scss";

function Pagination({ onPageChanged, currentPage, totalPages }) {
  const arrayOfNumbers = [...Array(totalPages)?.keys()];

  const options = (arrayOfNumbers) => {
    return arrayOfNumbers
      ?.filter((index) => index > 0)
      .map((item, idx) => {
        return {
          value: `${item}`,
          label: `${item}`,
        };
      });
  };

  return (
    <div className="pagination__container">
      <button
        className="pagination__button"
        onClick={() => onPageChanged(Number(currentPage) - 1)}
      >
        PREVIOUS
      </button>
      <Select
        className="pagination__selector"
        onChange={(input) => {
          const selectedOption = input.value;
          onPageChanged(selectedOption);
        }}
        options={options(arrayOfNumbers)}
        placeholder={"Select page..."}
      />
      <button
        className="pagination__button"
        onClick={() => onPageChanged(Number(currentPage) + 1)}
      >
        NEXT
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  collection: state.collection.collectionData,
});

export default connect(mapStateToProps)(Pagination);
