import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class ButtonService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ButtonComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ButtonComponent, isStandalone: true, selector: "lib-button", ngImport: i0, template: `
    <p>
      button works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', standalone: true, imports: [], template: `
    <p>
      button works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonService };
//# sourceMappingURL=button.mjs.map
