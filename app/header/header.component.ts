import {Component, ElementRef} from '@angular/core';

import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'header',
  templateUrl: 'app/header/header.component.html',
  directives: [SidebarComponent] //, HeaderNotification]
})
export class HeaderComponent {}
