import { Component, Input } from '@angular/core';

@Component({
    selector: 'ab-label',
    template: `
<strong data-attribute="text" [ngStyle]="{'color': color, 'font-size': size}">{{text}}</strong>
`
})
export class LabelComponent {
    @Input() text: string = 'Label';
    @Input() color: string = '#383838';
    @Input() size: string = '18';
}