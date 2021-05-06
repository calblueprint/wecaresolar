import { get, set } from 'idb-keyval';
import { imageStore } from '../../index';

export async function loadIDBImage(imageUrl: string) {
  const imageData = await get<Blob>(imageUrl, imageStore);
  if (imageData) {
    const URL = window.URL || window.webkitURL;
    const urlResult = URL.createObjectURL(imageData);
    return urlResult.startsWith('blob:') ? urlResult : 'blob:' + urlResult;
  }
  return undefined;
}

export async function loadOrFetchImage(imageUrl: string) {
  const urlResult = await loadIDBImage(imageUrl);
  if (urlResult === undefined) {
    try {
      const blob = await fetch(imageUrl).then((res) => res.blob());
      await set(imageUrl, blob, imageStore);
      return imageUrl;
    } catch (err) {
      console.log(
        '[offlineUtils] An error occurred while trying to load the image:',
        err
      );
      return undefined;
    }
  } else {
    return urlResult;
  }
}
