import {photoData, generateMockData} from './data.js';
import {showThumbnail} from './thumbnails.js';
import {setPhotoData} from './big-photo-viewer.js';

generateMockData(26);
showThumbnail(photoData);
setPhotoData(photoData);

