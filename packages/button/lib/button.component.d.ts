import { OnInit } from '@angular/core';
import { IOptions, IProps, IState } from './button.interface';
import * as i0 from "@angular/core";
export declare class TekButtonComponent implements OnInit {
    classname: string;
    classes: any;
    props: IProps;
    options: IOptions;
    state: IState;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TekButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TekButtonComponent, "tek-button", never, { "props": { "alias": "props"; "required": false; }; "options": { "alias": "options"; "required": false; }; "state": { "alias": "state"; "required": false; }; }, {}, never, never, false, never>;
}
