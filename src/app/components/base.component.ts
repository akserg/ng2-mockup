import { ElementRef } from '@angular/core';

export abstract class BaseComponent {

    el: HTMLElement;

    top: string = '0';
    left: string = '0';
    width: string = '80';
    height: string = '30';

    constructor(elRef: ElementRef) {
        this.el = elRef.nativeElement;
        // Mark it as draggable
        //dnd-draggable [dragEnabled]="true" [dragData]="'button'"
        this.el.setAttribute('dnd-draggable', '');
        this.el.setAttribute('dragEnabled', 'true');
        this.el.setAttribute('dragData', 'button');
        // Call update changes
        this.updateComponent();
    }

    /**
     * I didn't find the way to convince onChanges work, so use this hack method
     */
    updateComponent() {
        this.el.style.top = this.top;
        this.el.style.left = this.left;
        this.el.style.width = this.width;
        this.el.style.height = this.height;
    }
}