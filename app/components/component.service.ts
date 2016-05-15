import { Injectable } from '@angular/core';
import { Type } from '@angular/common/src/facade/lang';

import {ButtonComponent} from './button.component';
import {CheckboxComponent} from './checkbox.component';
import {LabelComponent} from './label.component';
import {RadioComponent} from './radio.component';
import {TextComponent} from './text.component';

@Injectable()
export class ComponentService {
    getType(kind: string): Type {
        switch (kind) {
            case 'button': return ButtonComponent;
            case 'checkbox': return CheckboxComponent;
            case 'label': return LabelComponent;
            case 'radio': return RadioComponent;
            case 'text': return TextComponent;
            default: throw new Error(`Unknown kind ${kind}`);
        }
    }
}