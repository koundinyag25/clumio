import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/themeProvider';
import cx from 'classnames';
import sx from './settingsPane.module.scss';
import Dropdown from '../../atoms/dropdown';
import RatingSelector from '../ratingSelector/ratingSelector';

import ACTIONS from '../../pages/movieListpage/movieListPage.actions';
const makeOptions = (opt) =>
  opt.reduce((acc, i) => [...acc, { label: i.name, value: i.id }], []);

const SettingsPane = ({ onAction, filters, generList }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleToggleTheme = () => {
    const themetoSet = theme === 'light' ? 'dark' : 'light';
    setTheme(themetoSet);
  };

  const onGenerSelect = (type) => (item) => {
    onAction({
      type: ACTIONS.SET_FILTERS,
      payload: {
        key: type,
        value: item.value,
      },
    });
  };

  const handleSetRating = (rating) => {
    onAction({
      type: ACTIONS.SET_FILTERS,
      payload: {
        key: 'rating',
        value: rating,
      },
    });
  };

  return (
    <div className={cx(sx.settingsPane, sx[theme])}>
      <h2>
        <div>Discover options</div>
      </h2>
      <Dropdown
        options={[
          { label: 'Movie', value: 'movie' },
          { label: 'Tv Shows', value: 'tv' },
        ]}
        value={filters.type}
        onOptionClick={onGenerSelect('type')}
        label="Type"
      />
      <Dropdown
        options={makeOptions(generList[filters.type] || [])}
        label="Gener"
        value={filters.gener}
        onOptionClick={onGenerSelect('gener')}
      />
      <div>
        <div>Rating</div>
        <RatingSelector rating={filters.rating} onStarClick={handleSetRating} />
      </div>
      <div
        className={cx(sx.toggleButton, sx[theme])}
        onClick={handleToggleTheme}
      >
        Toggle Theme
      </div>
    </div>
  );
};

export default SettingsPane;
