import queryString from 'query-string';
export const getFetchUrl = (endPoint, payload = {}) => {
  const { gener, rating, searchText, ...rest } = payload;
  const queryParams = queryString.stringify({
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    with_genres: [payload?.gener],
    'vote_average.gte': 0,
    'vote_agerage.lte': 2 * rating,
    ...rest,
  });

  return `${process.env.REACT_APP_MOVIE_DB_BASE_URL}${endPoint}?${queryParams}`;
};
