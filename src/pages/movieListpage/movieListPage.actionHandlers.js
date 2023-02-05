import { MOVIE_LIST_CATGEGOTY_CONFIG } from '../../organisms/movieList/movieListTabs.config';
import {
  getGenerListByType,
  getMediaListByPayload,
  getMediaItemsBySearch,
} from '../../services/media';
import ACTIONS from './movieListPage.actions';
import { MEDIA_TYPE } from './movieListPage.constants';

const handleGetGenerByType = async ({ getState, setState }) => {
  try {
    const { filters, generList } = getState();

    if (generList[filters.type]) {
      setState(
        {
          filters: {
            ...filters,
            gener: generList[filters.type][0].id,
          },
        },
        () => {
          handleGetMediaItems({ getState, setState });
        }
      );
      return;
    }
    const res = await getGenerListByType({ type: filters.type });
    setState(
      {
        generList: {
          ...generList,
          [filters.type]: res.genres,
        },
        filters: {
          ...filters,
          gener: res.genres[0]?.id,
        },
      },
      () => {
        handleGetMediaItems({ getState, setState });
      }
    );
  } catch (error) {
    console.log({ error });
  }
};

const handleGetMediaItems = async ({ getState, setState }) => {
  try {
    const { filters, currentCategory, searchText } = getState();
    const res = await getMediaListByPayload({
      ...filters,
      sort_by: MOVIE_LIST_CATGEGOTY_CONFIG[currentCategory]?.sortKey,
      searchText,
    });

    setState({
      mediaItems: res.results,
    });
  } catch (error) {
    console.error({ error });
  }
};

const handleSetFilters = ({ getState, setState, payload = {} }) => {
  const { filters: prevFilters } = getState();
  const { key, value } = payload;
  setState({ filters: { ...prevFilters, [key]: value } }, () => {
    if (key === 'type') {
      handleGetGenerByType({ getState, setState });
    } else {
      handleGetMediaItems({ getState, setState });
    }
  });
};

const handleGetMediaItemsBySearch = async ({
  getState,
  setState,
  payload = {},
}) => {
  try {
    const { searchText, filters } = getState();
    const res = await getMediaItemsBySearch({ query: searchText, ...filters });
    setState({
      mediaItems: res.results,
    });
  } catch (error) {
    console.error(error);
  }
};
const handleSetSearchText = ({ getState, setState, payload = {} }) => {
  const { searchText } = payload;
  if (searchText.length === 0) {
    setState(
      {
        filters: {
          type: MEDIA_TYPE.MOVIE,
          gener: '28', //10759
          dateRange: [0, 0],
          rating: 5,
        },
        currentCategory: '',
        searchText: '',
      },
      () => {
        handleGetMediaItems({ getState, setState });
      }
    );
    return;
  }

  setState(
    {
      searchText,
    },
    () => {
      handleGetMediaItemsBySearch({ getState, setState });
    }
  );
};

const handleSetCategory = ({ getState, setState, payload = {} }) => {
  const { currentCategory } = payload;

  setState(
    {
      currentCategory,
    },
    () => {
      handleGetMediaItems({ getState, setState });
    }
  );
};

export default {
  [ACTIONS.GET_GENERS_BY_TYPE]: handleGetGenerByType,
  [ACTIONS.GET_MEDIA_ITEMS]: handleGetMediaItems,
  [ACTIONS.SET_FILTERS]: handleSetFilters,
  [ACTIONS.SET_SEARCH_TEXT]: handleSetSearchText,
  [ACTIONS.SET_CATEGORY]: handleSetCategory,
};
