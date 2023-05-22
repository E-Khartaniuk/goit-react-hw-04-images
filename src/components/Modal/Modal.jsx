import React, { useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from '../Modal/Modal.module.css';

export function Modal({ bigImg, onClose, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageLoad = () => {
    setImageLoaded(!imageLoaded);
  };

  return (
    <div className={css.overlay} onClick={event => onClose(event)}>
      <div className={css.modal}>
        <img
          src={bigImg}
          alt={alt}
          className={css.bigImg}
          onLoad={handleImageLoad}
        />
        {!imageLoaded && (
          <ProgressBar
            height="80"
            width="380"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="black"
            barColor="black"
          />
        )}
      </div>
    </div>
  );
}
