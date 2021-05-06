import React, { useEffect, useLayoutEffect, useState } from 'react';
import Suitcase from '../Images/Suitcase.png';
import { loadIDBImage } from '../Offline/offlineUtils';
import SuitcaseAnimation from './SuitcaseAnimation';

type ImageState = 'Fetching' | 'Success' | 'Failure';

const SuitcaseRenderer = (props) => {
  const [imageState, setImageState] = useState<ImageState>('Fetching');
  const [image, setImage] = useState<HTMLImageElement | undefined>(undefined);

  useEffect(() => {
    const img = new Image(975, 650);
    img.src = Suitcase;
    img.onload = function () {
      setImageState('Success');
    };
    img.onerror = function () {
      // Suitcase image could not be loaded. Attempt to get a cached version from IDB instead
      loadIDBImage(Suitcase)
        .then((idbImageUrl) => {
          if (idbImageUrl !== undefined) {
            img.src = idbImageUrl;
            setImage(img);
          } else {
            console.log(
              '[SuitcaseRenderer] Error: offline, and no cached version of suitcase image exists'
            );
            setImageState('Failure');
          }
        })
        .catch((err) => {
          // TODO: display some kind of error message for this state?
          // (user won't be able to see suitcase, so drawing the blue dots might be confusing)
          console.log('[SuitcaseRenderer] Error loading suitcase image:', err);
          setImageState('Failure');
        });
    };
    setImage(img);
  }, []);

  return (
    <>
      {imageState === 'Success' ? (
        <SuitcaseAnimation image={image} {...props} />
      ) : imageState === 'Fetching' ? (
        'Fetching...'
      ) : (
        <p style={{ color: 'red' }}>
          Failed to load suitcase. Please check that you are connected to the
          internet! Once you load the suitcase once, it'll be available for all
          future visits, even when offline.
        </p>
      )}
    </>
  );
};

export default SuitcaseRenderer;
