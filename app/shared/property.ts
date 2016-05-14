export class Property {
    name: string;
    value: any;
    defaultValue: any;
}

export function setProperties(instance: any, values: any) {
    if (instance && values) {
        console.log('Set instance properties', values);
        for (let nake of values) {
            let value = values[name];
            setProperty(instance, name, value);
        }
    }
}

export function setProperty(instance: any, name: string, value: any) {
    if (instance.hasOwnProperty(name)) {
        try {
            instance[name] = value;
            console.log(`Set instance[${name}] = ${value}`);
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log(`Property ${name} doesn't exist`);
    }
}

export function getProperty(instance: any, name: string): any {
    let value: any;
    if (instance.hasOwnProperty(name)) {
        try {
            value = instance[name];
            console.log(`Get instance[${name}] = ${value}`);
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log(`Property ${name} doesn't exist`);
    }
    return value;
}

export function hasProperty(instance: any, name: string): any {
    let result: boolean = instance.hasOwnProperty(name);
    console.log(`The instance has property[${name}]: ${result}`);
    return result;
}

export function setStyles(instance: HTMLElement, styles: any) {
    if (instance && styles) {
        console.log('Set instance styles', styles);
        for (let nake of styles) {
            let style = styles[name];
            instance.style[name] = style;
        }
    }
}
