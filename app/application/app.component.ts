import {Component} from '@angular/core';

import {DesignerComponent} from '../designer/designer.component';

@Component({
    selector: 'application',
    template: '<designer></designer>',
    directives: [DesignerComponent]
})
export class ApplicationComponent { }
