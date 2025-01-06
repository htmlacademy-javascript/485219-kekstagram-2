import {getRandomPhotoObjects} from './photos.js';
import {showThumbnail} from './thumbnails.js';
import {photoObjects} from './render-big-photo.js';

const OBJECTS_COUNT = 26;

const randomPhotoObjects = getRandomPhotoObjects(OBJECTS_COUNT);
photoObjects = randomPhotoObjects;

showThumbnail(randomPhotoObjects);
