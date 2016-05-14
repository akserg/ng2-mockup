import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {WrapperComponent} from '../wrapper/wrapper.component';

@Component({
  selector: 'designer',
  templateUrl: 'app/designer/designer.component.html',
  directives: [WrapperComponent, CORE_DIRECTIVES]
})
export class DesignerComponent {
}
