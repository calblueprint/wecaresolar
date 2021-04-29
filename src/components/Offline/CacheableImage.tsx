import React, { useEffect, useState } from 'react';
import { get, set } from 'idb-keyval';
import { imageStore } from '../../index';

interface CacheableImageProps {
  src: string;
  [x: string]: any;
}

type ImageState = 'Fetching' | 'Success' | 'Failure';

const CacheableImage = (props: CacheableImageProps) => {
  const { src, ...restOfProps } = props;
  const [imageURL, setImageURL] = useState<string>(src);
  const [imageState, setImageState] = useState<ImageState>('Fetching');

  useEffect(() => {
    async function loadImage(): Promise<void> {
      let imageData: Blob;
      try {
        imageData = await get<Blob>(src, imageStore);
        if (imageData === undefined) {
          // Image does not exist in cache. Use `src` as the image URL for now...
          setImageURL(src);

          // ...but also fetch the image and save it to the cache for future visits.
          const blob = await fetch(src).then((res) => res.blob());
          await set(src, blob, imageStore);
          console.log('Successfully saved image to idb!');
          setImageState('Success');
        } else {
          // Image exists in cache; can use that directly
          const URL = window.URL || window.webkitURL;
          const urlResult = URL.createObjectURL(imageData);
          console.log('Found cached image in idb:', urlResult);
          setImageURL(urlResult);
          setImageState('Success');
        }
      } catch (err) {
        console.log(
          '[CacheableImage] An error occurred while trying to load the image:',
          err
        );
        setImageState('Failure');
      }
    }
    loadImage();
  }, []);

  return (
    <>
      {imageState === 'Fetching' ? (
        <p>Loading image...</p>
      ) : imageState === 'Failure' ? (
        <p style={{ color: 'red' }}>
          Failed to load image. Please check that you are connected to the
          internet! Once you load this image once, it'll be available for all
          future visits, even when offline.
        </p>
      ) : (
        <img src={imageURL} {...restOfProps} />
      )}
    </>
  );
};

export default CacheableImage;
