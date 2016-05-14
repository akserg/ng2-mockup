import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ApplicationComponent} from './application/app.component';

import {ItemService} from './item/item.service';
import {PageService} from './pages/shared/page.service';
import {ProjectService} from './project/project.service';

bootstrap(ApplicationComponent, [
    ItemService, PageService, ProjectService
]);
