import React, { useCallback } from 'react';

import ACTIONS from '../../pages/movieListpage/movieListPage.actions';
import SearchBar from './searchBar';
import Tabs from '../../tabs';
import { MOVIE_LIST_CATGEGOTY_CONFIG } from './movieListTabs.config';

const MovieList = ({ onAction, mediaItems, currentCategory, searchText }) => {
  const config = Object.values(MOVIE_LIST_CATGEGOTY_CONFIG);
  const handleTabSelect = (selectedTab) => {
    onAction({
      type: ACTIONS.SET_CATEGORY,
      payload: {
        currentCategory: selectedTab,
      },
    });
  };

  const leftContainer = () => <h3 style={{ padding: '0.4rem' }}>Discover</h3>;
  const rightContiner = () => (
    <SearchBar onAction={onAction} value={searchText} />
  );

  return (
    <Tabs
      config={config}
      onTabSelect={handleTabSelect}
      data={mediaItems}
      leftContainer={leftContainer}
      rightContiner={rightContiner}
      selectedTab={currentCategory || config[0]?.tabKey}
    />
  );
};

export default MovieList;
