import {getPhotoData} from './data.js';
import {showThumbnail} from './thumbnails.js';
import {setPhotoData} from './big-photo-viewer.js';

const photoData = getPhotoData(26);

showThumbnail(photoData);
setPhotoData(photoData);

