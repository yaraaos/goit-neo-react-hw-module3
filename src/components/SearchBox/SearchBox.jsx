/* eslint-disable react/prop-types */
import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, onSearch }) => {
  return (
    <label className={css.search}>
      Find contacts by name
      <input type="text" value={searchValue} onChange={onSearch} />
    </label>
  );
};

export default SearchBox;