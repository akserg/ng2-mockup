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

    addItem(item: Item): Promise<any> {
        let kind: any = item.kind;
        return this.loader.loadNextToLocation(kind, this.view).then((cmp: ComponentRef<any>) => {
            let instance: any = cmp.instance;
            setProperties(instance, item.properties);
            setStyles(instance, item.styles);
            return cmp;
        });
    }

    addComponent(kind: Type): Promise<any> {
        return this.loader.loadNextToLocation(kind, this.view).then((cmp: ComponentRef<any>) => {
            let instance: any = cmp.instance;
            // setProperties(instance, item.properties);
            // setStyles(instance, item.styles);
            return cmp;
        });
    }
}

