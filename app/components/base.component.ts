import { ElementRef } from '@angular/core';

export abstract class BaseComponent {

    el: HTMLElement;

    top: string = '0';
    left: string = '0';
    width: string = '80';
    height: string = '30';

    constructor(elRef: ElementRef) {
        this.el = elRef.nativeElement;
        this.updateComponent();
    }

    updateComponent() {
        this.el.style.top = this.top;
        this.el.style.left = this.left;
        this.el.style.width = this.width;
        this.el.style.height = this.height;
    }
}