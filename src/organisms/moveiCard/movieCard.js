import React, { useContext } from 'react';
import themeProvider, { ThemeContext } from '../../providers/themeProvider';
// images path forum https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
import styles from './movieCard.module.scss';

const basePosterUrl = 'https://image.tmdb.org/t/p/w154';
const getSource = (imgName) => basePosterUrl + imgName;

const MovieCard = (props) => {
  const {
    title,
    overview,
    vote_count,
    backdrop_path,
    poster_path,
    release_date,
  } = props;

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{
        ...(theme === 'light' ? { background: 'ghostwhite' } : {}),
        width: 154,
      }}
    >
      <img src={getSource(poster_path)} />
      <div className={styles.details}>
        <h5>{title}</h5>
        {/* <h5>{overview}</h5> */}
        <h5>release date: {release_date}</h5>
        <h5>{vote_count}</h5>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
