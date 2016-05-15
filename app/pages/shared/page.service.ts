import { Injectable, DynamicComponentLoader, ViewContainerRef, ComponentRef } from '@angular/core';
import { Type } from '@angular/common/src/facade/lang';

import {Property, setProperties, setStyles} from '../../shared/property';
import {Item} from '../../item/item.service';

export class Page {
    title: string = 'Title';
    id: string;

    properties: any = {};
    styles: any = {};

    // items: Item[];
}

@Injectable()
export class PageService {

    private loader: DynamicComponentLoader;
    private view: ViewContainerRef;

    init(loader: DynamicComponentLoader, view: ViewContainerRef) {
        this.loader = loader;
        this.view = view;
    }

    createPage(): Page {
        // Set default Page
        let page: Page = new Page();
        page.styles['background-color'] = '';
        return page;
    }

    addItem(item: Item): Promise<any> {
        let kind: any = item.kind;
        return this.loader.loadNextToLocation(kind, this.view).then((cmp: ComponentRef<any>) => {
            let instance: any = cmp.instance;
            setProperties(instance, item.properties);
            setStyles(instance, item.styles);
            return cmp;
        });
    }

    addComponent(kind: Type, anchor: string): Promise<any> {
        return this.loader.loadNextToLocation(kind, this.view/*, null, anchor*/).then((cmp: ComponentRef<any>) => {
            let instance: any = cmp.instance;
            // setProperties(instance, item.properties);
            // setStyles(instance, item.styles);
            return cmp;
        });
    }
}

