import { Component, Input } from '@angular/core';

@Component({
    selector: 'ab-radio',
    template: `
<div class="radio {{checked ? 'checked' : '' }}"></div>
<span data-attribute="text">{{text}}</span>
`
})
export class RadioComponent {
    @Input() checked: boolean = true;
    @Input() text: string = 'Label';
}
