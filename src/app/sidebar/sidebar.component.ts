import {Component, ElementRef} from '@angular/core';

import {ToolListComponent} from '../tools/tool-list/tool-list.component';

@Component({
  selector: 'sidebar',
  styleUrls: ['app/sidebar/sidebar.component.css'],
  templateUrl: 'app/sidebar/sidebar.component.html',
  directives: [ToolListComponent]
})
export class SidebarComponent {}
