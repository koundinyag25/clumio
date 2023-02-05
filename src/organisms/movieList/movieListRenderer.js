import React from 'react';
import MoveiCard from '../moveiCard';

import styles from './movieList.module.scss';

const MovieListRenderer = ({ data: mediaItems }) => {
  const renderMediaItems = () => {
    if (mediaItems.length === 0) {
      return (
        <div className={styles.noData}>
          <h3>Couldn't find any movies/tv shows with search criteria</h3>
        </div>
      );
    }
    return (mediaItems || []).map((media) => <MoveiCard {...media} />);
  };
  return <div className={styles.movieList}>{renderMediaItems()}</div>;
};

export default React.memo(MovieListRenderer);
