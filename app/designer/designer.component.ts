import { Component, Input, DynamicComponentLoader, ViewContainerRef, ComponentRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {WrapperComponent} from '../wrapper/wrapper.component';

import {Page} from '../pages/shared/page.service';
import {PageComponent} from '../pages/page/page.component';

@Component({
  selector: 'designer',
  templateUrl: 'app/designer/designer.component.html',
  directives: [WrapperComponent, CORE_DIRECTIVES, PageComponent]
})
export class DesignerComponent {

  constructor(private loader: DynamicComponentLoader, private view: ViewContainerRef) {}

  addPage() {
    let page:Page = new Page();
    return this.loader.loadNextToLocation(PageComponent, this.view).then((cmp: ComponentRef<PageComponent>) => {
            let instance: PageComponent = cmp.instance;
            instance.page = page;
            // setProperties(instance, item.properties);
            // setStyles(instance, item.styles);
            return cmp;
        });
  }
}
