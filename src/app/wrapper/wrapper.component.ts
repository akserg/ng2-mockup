import {Component, ElementRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'wrapper',
  templateUrl: `app/wrapper/wrapper.component.html`,
  directives: [HeaderComponent, CORE_DIRECTIVES]
})
export class WrapperComponent {
}
