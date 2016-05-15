import { Component, Input, ElementRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

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
export class TextComponent {
    @Input() labelText: string = 'Label';
    @Input() hasLabel: boolean = true;

    @Input() top: string = '0';
    @Input() left: string = '0';
    @Input() width: string = '200';
    @Input() height: string = '30';

    constructor(private elRef: ElementRef) {
        this.elRef.nativeElement.style.top = this.top;
        this.elRef.nativeElement.style.left = this.left;
        this.elRef.nativeElement.style.width = this.width;
        this.elRef.nativeElement.style.height = this.height;
    }
}