import { Component, ComponentResolver, ViewContainerRef, ComponentRef, ComponentFactory, ViewChild, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { Type } from '@angular/common/src/facade/lang';

import {Page, PageService} from '../shared/page.service';
import {setProperty, getProperty} from '../../shared/property';
import {ComponentService} from '../../components/component.service';

@Component({
    selector: 'page',
    templateUrl: `app/pages/page/page.component.html`,
    directives: [CORE_DIRECTIVES]
})
export class PageComponent {

    static STYLES: string[] = ['background-color'];

    @ViewChild('container', { read: ViewContainerRef }) target: ViewContainerRef;
    @Input() page: Page;

    get pageStyle(): any {
        let res: any = {};
        for (let name of PageComponent.STYLES) {
            setProperty(res, name, getProperty(this.page.styles, name));
        }
        return res;
    }

    constructor(private pageService: PageService, private componentService: ComponentService, private resolver: ComponentResolver) {
    }

    addItem(kind: string) {
        let type: Type = this.componentService.getType(kind);
        this.resolver.resolveComponent(type).then((factory: ComponentFactory<any>) => {
            let cmp: ComponentRef<any> = this.target.createComponent(factory);
            console.log(cmp);
        });
    }
}
