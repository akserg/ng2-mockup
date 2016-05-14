import {Injectable} from '@angular/core';

import {Property} from '../shared/property';

export class Item {
    id: string;
    kind: string;

    properties: any;
    styles: any;

    items: Item[];
}

@Injectable()
export class ItemService {
    // static BUTTON: any = {

    // };
    // createItem(kind: string): Item {
    //     let item: Item = new Item();
    //     switch (kind) {
    //         case
    //     }
    //     return item;
    // }
}