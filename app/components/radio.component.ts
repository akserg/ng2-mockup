import { Component, Input, ElementRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {BaseComponent} from './base.component';

@Component({
    selector: 'md-radio',
    directives: [CORE_DIRECTIVES],
    host: {
        'class': 'object radio'
    },
    template: `
<div class="radio {{checked ? 'checked' : '' }}"></div>
<span attr.data-attribute="text">{{text}}</span>
`
})
export class RadioComponent extends BaseComponent {
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
