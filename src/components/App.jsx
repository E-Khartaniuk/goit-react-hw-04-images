import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';

import { getFeth, loadMore } from './services/loadMoreImages';

export function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = inputValue.trim();
    if (query === '') {
      return;
    }
    getFeth(query)
      .then(data => {
        setImages([...images, ...data.hits]);
      })
      .catch(err => {
        console.log('Error fetching images from Pixabay:', err);
      });
  });

  const loadMoreImages = () => {
    const nextPage = page + 1;

    setLoading(true);

    loadMore(inputValue, nextPage)
      .then(data => {
        const newImages = [...images, ...data.hits];
        setImages([...newImages]);
        setPage(nextPage);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error fetching images from Pixabay:', err);
        setLoading(false);
      });
  };

  const hendleSubmit = searchValue => {
    if (searchValue === inputValue) {
      return;
    }

    setImages([]);
    setInputValue(searchValue);
  };

  return (
    <div>
      <Searchbar onSubmit={hendleSubmit} />
      <ImageGallery imgArr={images}>
        <ImageGalleryItem />
      </ImageGallery>
      <Loader loadingMsg={loading} />
      <Button
        imgArr={images}
        loading={loading}
        loadMoreImages={loadMoreImages}
      />
    </div>
  );
}
