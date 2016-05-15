import { Component, Input, ElementRef } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    selector: 'md-label',
    directives: [CORE_DIRECTIVES],
    host: {
        'class': 'object label'
    },
    template: `
<strong attr.data-attribute="text" [ngStyle]="styles">{{text}}</strong>
`
})
export class LabelComponent {
    @Input() text: string = 'Label';
    @Input() color: string = '#383838';
    @Input() size: string = '18';

    @Input() top: string = '0';
    @Input() left: string = '0';
    @Input() width: string = '80';
    @Input() height: string = '30';

    get styles(): any {
        return {
            'color': this.color,
            'font-size': this.size
        };
    }

    constructor(private elRef: ElementRef) {
        this.elRef.nativeElement.style.top = this.top;
        this.elRef.nativeElement.style.left = this.left;
        this.elRef.nativeElement.style.width = this.width;
        this.elRef.nativeElement.style.height = this.height;
    }
}