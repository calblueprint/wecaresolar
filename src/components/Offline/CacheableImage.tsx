import React, { useEffect, useState } from 'react';
import { loadOrFetchImage } from './offlineUtils';

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
      const urlResult = await loadOrFetchImage(src);
      if (urlResult === undefined) {
        setImageState('Failure');
      } else {
        setImageState('Success');
        setImageURL((urlResult as unknown) as string);
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
