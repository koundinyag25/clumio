import React, { useEffect } from 'react';

import withActions from '../../hoc/withActions';
import MovieList from '../../organisms/movieList/movieList';
import SettingsPane from '../../organisms/settingsPane';
import ACTION_HANDLERS from './movieListPage.actionHandlers';
import ACTIONS from './movieListPage.actions';
import { MEDIA_TYPE } from './movieListPage.constants';

import sx from './movieListPage.module.scss';
const INITAL_STATE = {
  currentCategory: '',
  filters: {
    type: MEDIA_TYPE.MOVIE,
    gener: '28', //10759
    dateRange: [0, 0],
    rating: 5,
  },
  searchText: '',
  mediaItems: [],
  generList: {},
};

const MovieListPage = (props) => {
  const {
    onAction,
    currentCategory,
    filters,
    searchText,
    mediaItems,
    generList,
  } = props;
  useEffect(() => {
    onAction({
      type: ACTIONS.GET_GENERS_BY_TYPE,
    });
  }, []);

  return (
    <div className={sx.movieListPage}>
      <div className={sx.movieList}>
        <MovieList
          mediaItems={mediaItems}
          currentCategory={currentCategory}
          filters={filters}
          searchText={searchText}
          onAction={onAction}
        />
      </div>
      <SettingsPane
        onAction={onAction}
        filters={filters}
        generList={generList}
      />
    </div>
  );
};

export default withActions(INITAL_STATE, ACTION_HANDLERS)(MovieListPage);
