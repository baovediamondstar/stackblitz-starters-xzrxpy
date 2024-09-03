// lib/image-loader.ts
'use client';
import { ImageLoaderProps } from 'next/image';

export const imageLoader = ({ src, width }: ImageLoaderProps): string => {
  return `https://i0.wp.com/${src.substring(8)}?fit=${width}%2C${width}&ssl=1`;
};
