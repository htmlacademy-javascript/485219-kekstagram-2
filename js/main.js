import { showThumbnail } from './thumbnails.js';
import { setPhotoData } from './big-photo-viewer.js';
import { getData } from './api.js';
import { showOtherUsersDataError } from './notifications.js';

const fetchData = async () => {
  try {
    const photoData = await getData();
    showThumbnail(photoData);
    setPhotoData(photoData);
  } catch {
    showOtherUsersDataError();
  }
};

fetchData();
