import { Injectable, Component } from '@angular/core';
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
    createPage(): Page {
        // Set default Page
        let page: Page = new Page();
        page.styles['background-color'] = '';
        return page;
    }
}

