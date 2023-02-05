import MovieListRenderer from './movieListRenderer';

const MOVIE_LIST_CATGEGOTY_KEYS = {
  POPULAR: 'POPULAR',
  TRENDING: 'TRENDING',
  NEWEST: 'NEWEST',
  TOP_RATED: 'TOP_RATED',
};

//sort_by

export const MOVIE_LIST_CATGEGOTY_CONFIG = {
  [MOVIE_LIST_CATGEGOTY_KEYS.POPULAR]: {
    tabKey: MOVIE_LIST_CATGEGOTY_KEYS.POPULAR,
    sortKey: 'popularity.desc',
    label: 'Popular',
    component: MovieListRenderer,
  },
  [MOVIE_LIST_CATGEGOTY_KEYS.NEWEST]: {
    tabKey: MOVIE_LIST_CATGEGOTY_KEYS.NEWEST,
    sortKey: 'release_date.desc',
    label: 'Newest',
    component: MovieListRenderer,
  },
  [MOVIE_LIST_CATGEGOTY_KEYS.TOP_RATED]: {
    tabKey: MOVIE_LIST_CATGEGOTY_KEYS.TOP_RATED,
    sortKey: 'vote_count.desc',
    label: 'Top Rated',
    component: MovieListRenderer,
  },
};
