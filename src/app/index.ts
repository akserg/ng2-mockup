export * from './application/app.component';

export * from './components/index';
export * from './designer/index';
export * from './header/index';
export * from './item/index';
export * from './pages/index';
export * from './project/index';
export * from './shared/index';
export * from './sidebar/index';
export * from './tools/index';
export * from './wrapper/index';

import {ItemService} from './item/index';
import {PageService} from './pages/index';
import {ProjectService} from './project/index';
import {ComponentService} from './components/index';

// Application wide providers
export const APP_PROVIDERS = [
  ItemService, PageService, ProjectService, ComponentService
];


