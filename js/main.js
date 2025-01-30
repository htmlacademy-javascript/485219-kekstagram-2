import {showThumbnail} from './thumbnails.js';
import {setPhotoData} from './big-photo-viewer.js';
import {getData} from './api.js';
import {showDataError} from './notifications.js';

fetchData();

async function fetchData() {
  try {
    const photoData = await getData();
    showThumbnail(photoData);
    setPhotoData(photoData);
  } catch {
    showDataError();
  }
}
