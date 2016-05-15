import { Component, Input, ElementRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {BaseComponent} from './base.component';

@Component({
    selector: 'md-text',
    directives: [CORE_DIRECTIVES],
    host: {
        'class': 'object text'
    },
    template: `
<div class="text-input">
  <label attr.data-attribute="text" *ngIf="hasLabel">{{labelText}}</label>
  <div class="input"></div>
</div>
`
})
export class TextComponent extends BaseComponent {
    @Input() labelText: string = 'Label';
    @Input() hasLabel: boolean = true;

    @Input() top: string = '0';
    @Input() left: string = '0';
    @Input() width: string = '200';
    @Input() height: string = '30';

    constructor(elRef: ElementRef) {
        super(elRef);
    }
}