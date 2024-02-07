import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

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
    constructor() {
        this.classname = 'rounded-[5px]  gap-[4px] px-[12px] flex items-center justify-center text-[12px] font-[500] leading-[150%] transition-all ease-in-out duration-300';
        this.classes = {};
        this.props = {
            leftIcon: '',
            rightIcon: '',
            leftIconClass: '',
            rightIconClass: '',
            label: '',
        };
        this.options = {
            type: 'default',
            size: 'default',
            class: '',
        };
        this.state = {
            loading: false,
            active: true,
        };
    }
    ngOnInit() {
        switch (this.options.type) {
            case 'primary':
                this.classes.display = `bg-[#081A46] hover:bg-[#2D3566] cursor-pointer text-[#fff] `;
                break;
            case 'outline':
                this.classes.display = `bg-transparent hover:bg-[#2D3566] border cursor-pointer border-[#081A46] text-[#081A46] hover:text-[#fff] `;
                break;
            case 'alternate':
                this.classes.display = `bg-[#EDEEFF] hover:bg-[#9597D1] cursor-pointer text-[#081A46] `;
                break;
            case 'disabled':
                this.classes.display = `bg-[#E5E7EB] hover:bg-[#D2D6DC] cursor-pointer text-[#6B7280] `;
                break;
            case 'success':
                this.classes.display = `bg-[#057A55] hover:bg-[#03543F] cursor-pointer text-[#fff] `;
                break;
            case 'danger':
                this.classes.display = `bg-[#DC2626] hover:bg-[#9B1C1C] cursor-pointer text-[#fff] `;
                break;
            default:
                this.classes.display = `bg-transaparent text-[#5753C9] hover:underline cursor-pointer `;
                break;
        }
        switch (this.options.size) {
            case 'extra-small':
                this.classes.size = ` h-[24px]`;
                break;
            case 'small':
                this.classes.size = ` h-[24px]`;
                break;
            case 'medium':
                this.classes.size = ` h-[41px]`;
                break;
            case 'large':
                this.classes.size = ` h-[48px]`;
                break;
            case 'extra-large':
                this.classes.size = ` h-[52px]`;
                break;
            default:
                this.classes.size = ` h-[41px]`;
                break;
        }
        this.classname =
            this.classname +
                ' ' +
                this.classes.display +
                this.classes.size +
                ' ' +
                this.options.class;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ButtonComponent, isStandalone: true, selector: "button", inputs: { props: "props", options: "options", state: "state" }, ngImport: i0, template: "<span class=\"{{ classname }}\">\n  <img\n    *ngIf=\"props.leftIcon && props.leftIcon !== ''\"\n    src=\"{{ props.leftIcon }}\"\n    alt=\"\"\n  />\n  {{ props.label }}\n  <img\n    *ngIf=\"props.rightIcon && props.rightIcon !== ''\"\n    src=\"{{ props.rightIcon }}\"\n    alt=\"\"\n  />\n</span>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button', standalone: true, imports: [CommonModule], template: "<span class=\"{{ classname }}\">\n  <img\n    *ngIf=\"props.leftIcon && props.leftIcon !== ''\"\n    src=\"{{ props.leftIcon }}\"\n    alt=\"\"\n  />\n  {{ props.label }}\n  <img\n    *ngIf=\"props.rightIcon && props.rightIcon !== ''\"\n    src=\"{{ props.rightIcon }}\"\n    alt=\"\"\n  />\n</span>\n" }]
        }], propDecorators: { props: [{
                type: Input
            }], options: [{
                type: Input
            }], state: [{
                type: Input
            }] } });

/*
 * Public API Surface of button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonService };
//# sourceMappingURL=tekenna-button.mjs.map
