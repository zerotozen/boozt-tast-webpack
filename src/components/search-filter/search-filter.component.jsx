import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

import "./search-filter.styles.scss";

export function SearchFilter({
  placeholder,
  onInputChange,
  searchInput,
  clearSearchInput,
}) {
  return (
    <div className="search-filter__container">
      <input
        className="search-filter__input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => onInputChange(e.target.value)}
        value={searchInput}
      />
      <AiOutlineSearch className="search-filter__icon" size={20} />
      {searchInput.length > 0 ? (
        <MdClear onClick={clearSearchInput} className="search-filter__clear" />
      ) : (
        ""
      )}
    </div>
  );
}
