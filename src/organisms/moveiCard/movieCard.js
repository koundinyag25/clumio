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
    name,
    original_name,
    original_title,
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
      {poster_path ? (
        <img src={getSource(poster_path)} alt={getSource(backdrop_path)} />
      ) : (
        <div className={styles.noImage}>
          <div>No Image</div>
        </div>
      )}
      <div className={styles.details}>
        <h5>{title || original_title || name || original_name}</h5>
        {/* <h5>{overview}</h5> */}
        <h5>release date: {release_date}</h5>
        <h5>votes: {vote_count}</h5>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
