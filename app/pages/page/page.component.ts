import { Component, Input, DynamicComponentLoader, ViewContainerRef, ComponentRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { Type } from '@angular/common/src/facade/lang';

import {Page, PageService} from '../shared/page.service';
import {setProperty, getProperty} from '../../shared/property';
import * as cpm from '../../components/index';

@Component({
  selector: 'page',
  templateUrl: `app/pages/page/page.component.html`,
  directives: [CORE_DIRECTIVES]
})
export class PageComponent {

    static STYLES: string[] = ['background-color'];

    @Input() page: Page;

    get pageStyle(): any {
        let res: any = {};
        for (let name of PageComponent.STYLES) {
            setProperty(res, name, getProperty(this.page.styles, name));
        }
        return res;
    }

    constructor(private pageService: PageService, loader: DynamicComponentLoader, view: ViewContainerRef) {
        this.pageService.init(loader, view);
    }

    addItem(kind: Type) {
        this.pageService.addComponent(kind);
    }
}
