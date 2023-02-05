import { getFetchUrl } from '../helpers/requestHelper';

const API_PATH = {
  GET_GENRE_LIST_BY_TYPE: (type) => `/genre/${type}/list`,
  GET_DISCOVER_MEDAIA_BY_TYE: (type) => `/discover/${type}`,
  SEARCH_BY_TYPE: (type) => `/search/${type}`,
};

export const getGenerListByType = ({ type }) =>
  fetch(getFetchUrl(API_PATH.GET_GENRE_LIST_BY_TYPE(type)))
    .then((res) => res.json())
    .catch((error) => error);

export const getMediaListByPayload = ({ type, ...payload }) =>
  fetch(getFetchUrl(API_PATH.GET_DISCOVER_MEDAIA_BY_TYE(type), payload))
    .then((res) => res.json())
    .catch((error) => error);

export const getMediaItemsBySearch = ({ type, ...payload }) =>
  fetch(getFetchUrl(API_PATH.SEARCH_BY_TYPE(type), payload))
    .then((res) => res.json())
    .catch((error) => error);
