import {Component, ElementRef} from '@angular/core';

import {DND_DIRECTIVES} from 'ng2-dnd/ng2-dnd';

@Component({
  selector: 'tool-list',
  styleUrls: ['app/tools/tool-list/tool-list.component.css'],
  templateUrl: 'app/tools/tool-list/tool-list.component.html',
  directives: [DND_DIRECTIVES]
})
export class ToolListComponent {}
