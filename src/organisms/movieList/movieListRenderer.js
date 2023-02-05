import React from 'react';
import MoveiCard from '../moveiCard';

import styles from './movieList.module.scss';

const MovieListRenderer = ({ data: mediaItems }) => {
  const renderMediaItems = () => {
    return (mediaItems || []).map((media) => <MoveiCard {...media} />);
  };
  return <div className={styles.movieList}>{renderMediaItems()}</div>;
};

export default MovieListRenderer;
