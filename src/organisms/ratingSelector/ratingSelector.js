import React, { useContext } from 'react';
import cx from 'classnames';

import { ThemeContext } from '../../providers/themeProvider';
import {
  FILLED_THEME_COLOR,
  UNFILLED_THEME_COLOR,
} from './ratingSelector.constants';

import styles from './ratingSelector.module.scss';

const TOTAL_STARS = 5;

const RatingSelector = ({ rating = 0, onStarClick = () => {} }) => {
  const { theme } = useContext(ThemeContext);
  const handleStartClick = (currentIndex) => () => {
    onStarClick(currentIndex + 1);
  };

  const getFilledStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push({
        filled: true,
      });
    }
    return stars;
  };

  const getUnfilledStars = () => {
    const remaingStars = TOTAL_STARS - rating;
    const stars = [];
    for (let i = 0; i < remaingStars; i++) {
      stars.push({ filled: false });
    }
    return stars;
  };

  const renderStars = () => {
    const stars = [];
    const allStars = [...getFilledStars(), ...getUnfilledStars()];
    return allStars.map(({ filled }, index) => (
      <div
        className={cx(styles.star)}
        style={{
          color: filled
            ? FILLED_THEME_COLOR[theme]
            : UNFILLED_THEME_COLOR[theme],
        }}
        onClick={handleStartClick(index)}
      >
        &#9733;
      </div>
    ));
  };
  return <div className={styles.container}>{renderStars()}</div>;
};

export default RatingSelector;
