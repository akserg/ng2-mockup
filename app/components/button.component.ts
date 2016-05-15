import { Component, Input, ElementRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

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
export class ButtonComponent {
    @Input() text: string = 'Button';

    @Input() top: string = '0';
    @Input() left: string = '0';
    @Input() width: string = '80';
    @Input() height: string = '30';

    constructor(private elRef: ElementRef) {
        this.elRef.nativeElement.style.top = this.top;
        this.elRef.nativeElement.style.left = this.left;
        this.elRef.nativeElement.style.width = this.width;
        this.elRef.nativeElement.style.height = this.height;
    }
}