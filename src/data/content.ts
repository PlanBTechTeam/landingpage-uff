// src/data/content.ts

import type { NavPhotos } from 'src/assets/nav';
import rawContent from './content.json';

type NavPhotoKeys = keyof typeof NavPhotos;

interface NavItem {
  title: string;
  img: NavPhotoKeys;
}

interface Content {
  nav: NavItem[];
}

export const content = rawContent as Content;
