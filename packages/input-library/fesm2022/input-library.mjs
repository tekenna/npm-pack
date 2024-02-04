import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class InputLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class InputLibraryComponent {
    ngOnInit() {
        alert('Component Library');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: InputLibraryComponent, isStandalone: true, selector: "lib-input-library", ngImport: i0, template: ` <p>Testing input component library</p> `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: InputLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-input-library', standalone: true, imports: [], template: ` <p>Testing input component library</p> ` }]
        }] });

/*
 * Public API Surface of input-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InputLibraryComponent, InputLibraryService };
//# sourceMappingURL=input-library.mjs.map
