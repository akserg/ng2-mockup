import { Component, Input, ElementRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {BaseComponent} from './base.component';

@Component({
    selector: 'md-button',
    directives: [CORE_DIRECTIVES],
    host: {
        'class': 'object button'
    },
    template: `
<div class="button" attr.data-attribute="{{text}}" attr.width="{{width}}">{{text}}</div>
`
})
export class ButtonComponent extends BaseComponent {
    @Input() text: string = 'Button';

    @Input() top: string = '0';
    @Input() left: string = '0';
    @Input() width: string = '80';
    @Input() height: string = '30';

    constructor(elRef: ElementRef) {
        super(elRef);
    }


}