import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import css from './ImageGallery.module.css';

export default function ImageGallery({ imgArr }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const getSelectedImg = img => {
    setSelectedImage(img);
    setShowModal(!showModal);
  };

  const closeModal = event => {
    event.stopPropagation();
    if (event.target !== event.currentTarget && showModal) {
      return;
    }
    setShowModal(!showModal);
  };

  return (
    <ul className={css.galleryItem}>
      <ImageGalleryItem imgArr={imgArr} getSelectedImg={getSelectedImg} />
      {showModal && selectedImage && (
        <Modal
          bigImg={selectedImage.largeImageURL}
          onClose={closeModal}
          alt={selectedImage.tags}
        />
      )}
    </ul>
  );
}
