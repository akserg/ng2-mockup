import { Component, Input } from '@angular/core';

@Component({
    selector: 'ab-button',
    template: `
<div class="button" data-attribute="text" width="{{width}}">{{text}}</div>
`
})
export class ButtonComponent {
    @Input() text: string = 'Button';
    @Input() width: string = '80';
}