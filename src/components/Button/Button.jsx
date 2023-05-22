import React from 'react';
import css from './Button.module.css';

export function Button({ imgArr, loading, loadMoreImages }) {
  return (
    imgArr.length > 0 &&
    !loading && (
      <button className={css.loadMore} onClick={loadMoreImages}>
        Load more
      </button>
    )
  );
}
