import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ApplicationComponent} from './application/app.component';

import {DND_PROVIDERS} from 'ng2-dnd/ng2-dnd';

import {ItemService} from './item/item.service';
import {PageService} from './pages/shared/page.service';
import {ProjectService} from './project/project.service';
import {ComponentService} from './components/component.service';

bootstrap(ApplicationComponent, [
    DND_PROVIDERS,
    ItemService, PageService, ProjectService, ComponentService
]);
