import { Component, Input, ElementRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {BaseComponent} from './base.component';

@Component({
    selector: 'md-checkbox',
    directives: [CORE_DIRECTIVES],
    host: {
        'class': 'object checkbox'
    },
    template: `
<div class="checkbox {{checked ? 'checked' : '' }}"></div>
<span attr.data-attribute="text">{{text}}</span>
`
})
export class CheckboxComponent extends BaseComponent  {
    @Input() checked: boolean = true;
    @Input() text: string = 'Label';

    @Input() top: string = '0';
    @Input() left: string = '0';
    @Input() width: string = '80';
    @Input() height: string = '30';

    constructor(elRef: ElementRef) {
        super(elRef);
    }
}