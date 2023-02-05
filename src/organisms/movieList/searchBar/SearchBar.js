import React, { useCallback, useEffect, useMemo, useState } from 'react';
import _debounce from 'lodash/debounce';
import ACTIONS from '../../../pages/movieListpage/movieListPage.actions';
import sx from './searchBar.module.scss';

const SearchBar = ({ onSearch, value, onAction }) => {
  const [searchText, setSearchText] = useState(value);

  const debounce = useMemo(() => _debounce(onAction, 3000), []);

  const handleChange = useCallback(
    (e) => {
      setSearchText(e.target.value);
      debounce({
        type: ACTIONS.SET_SEARCH_TEXT,
        payload: {
          searchText: e.target.value,
        },
      });
    },
    [onAction, debounce]
  );

  return (
    <div className={sx.container}>
      <input
        type="text"
        className={sx.input}
        placeholder="search by name"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
};

export default React.memo(SearchBar);
