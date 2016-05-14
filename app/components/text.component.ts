import { Component, Input } from '@angular/core';

@Component({
    selector: 'ab-text',
    template: `
<div class="text-input">
  <label data-attribute="text" #ngIf="label">{{text}}</label>
  <div class="input"></div>
</div>
`
})
export class TextComponent {
    @Input() text: string = 'Label';
    @Input() label: boolean = true;
    @Input() width: string = '200';
    @Input() height: string = '30';
}