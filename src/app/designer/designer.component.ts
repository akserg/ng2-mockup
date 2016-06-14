import { Component } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {WrapperComponent} from '../wrapper/wrapper.component';

import {Page} from '../pages/shared/page.service';
import {PageComponent} from '../pages/page/page.component';

@Component({
  selector: 'designer',
  styleUrls: ['app/designer/designer.component.css'],
  templateUrl: 'app/designer/designer.component.html',
  directives: [WrapperComponent, CORE_DIRECTIVES, PageComponent]
})
export class DesignerComponent {

  page: Page;

  constructor() {
    this.page = new Page();
  }
}
