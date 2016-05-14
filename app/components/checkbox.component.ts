import { Component, Input } from '@angular/core';

@Component({
    selector: 'ab-checkbox',
    template: `
<div class="checkbox {{checked ? 'checked' : '' }}"></div>
<span data-attribute="text">{{text}}</span>
`
})
export class CheckboxComponent {
    @Input() checked: boolean = true;
    @Input() text: string = 'Label';
}