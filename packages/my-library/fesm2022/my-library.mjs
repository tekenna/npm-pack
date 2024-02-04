import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class MyLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MyLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MyLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MyLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class MyLibraryComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MyLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: MyLibraryComponent, isStandalone: true, selector: "lib-my-library", ngImport: i0, template: `
    <p>
      my-library works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MyLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-library', standalone: true, imports: [], template: `
    <p>
      my-library works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of my-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibraryComponent, MyLibraryService };
//# sourceMappingURL=my-library.mjs.map
