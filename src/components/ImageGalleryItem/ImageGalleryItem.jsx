import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imgArr, getSelectedImg }) {
  return imgArr.map(img => (
    <li key={img.id} onClick={() => getSelectedImg(img)}>
      {imgArr && (
        <img className={css.previeImg} src={img.webformatURL} alt={img.alt} />
      )}
    </li>
  ));
}
