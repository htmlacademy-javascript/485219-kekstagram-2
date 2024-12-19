import {getRandomPhotoObjects} from './photos.js';
import {showThumbnail} from './thumbnails.js';

const OBJECTS_COUNT = 26;

const randomPhotoObjects = getRandomPhotoObjects(OBJECTS_COUNT);

showThumbnail(randomPhotoObjects);
