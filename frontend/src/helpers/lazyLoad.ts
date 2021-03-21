import { lazy } from 'react';

export const lazyLoad = (path: string) => lazy(() => import(/* webpackChunkName:
 "music" */ path
).then(({ component }) => (
  { default: component }
)));
