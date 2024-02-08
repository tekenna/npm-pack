import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TekButtonModule {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TekButtonModule, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TekButtonModule, isStandalone: true, selector: "tek-button", inputs: { props: "props", options: "options", state: "state" }, ngImport: i0, template: `<span class="{{ classname }}">
    <img
      *ngIf="props.leftIcon && props.leftIcon !== ''"
      src="{{ props.leftIcon }}"
      alt=""
    />
    {{ props.label }}
    <img
      *ngIf="props.rightIcon && props.rightIcon !== ''"
      src="{{ props.rightIcon }}"
      alt=""
    />
  </span>`, isInline: true, styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TekButtonModule, decorators: [{
            type: Component,
            args: [{ selector: 'tek-button', standalone: true, imports: [CommonModule], template: `<span class="{{ classname }}">
    <img
      *ngIf="props.leftIcon && props.leftIcon !== ''"
      src="{{ props.leftIcon }}"
      alt=""
    />
    {{ props.label }}
    <img
      *ngIf="props.rightIcon && props.rightIcon !== ''"
      src="{{ props.rightIcon }}"
      alt=""
    />
  </span>` }]
        }], propDecorators: { props: [{
                type: Input
            }], options: [{
                type: Input
            }], state: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2J1dHRvbi9zcmMvbGliL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFxQi9DLE1BQU0sT0FBTyxlQUFlO0lBbkI1QjtRQW9CRSxjQUFTLEdBQ1AsbUpBQW1KLENBQUM7UUFDdEosWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNULFVBQUssR0FBVztZQUN2QixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxFQUFFO1lBQ2IsYUFBYSxFQUFFLEVBQUU7WUFDakIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO1FBQ08sWUFBTyxHQUFhO1lBQzNCLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDTyxVQUFLLEdBQVc7WUFDdkIsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7S0F1REg7SUFyREMsUUFBUTtRQUNOLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkRBQTZELENBQUM7Z0JBQ3JGLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNEdBQTRHLENBQUM7Z0JBQ3BJLE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0VBQWdFLENBQUM7Z0JBQ3hGLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsZ0VBQWdFLENBQUM7Z0JBQ3hGLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkRBQTZELENBQUM7Z0JBQ3JGLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsNkRBQTZELENBQUM7Z0JBQ3JGLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxnRUFBZ0UsQ0FBQztnQkFDeEYsTUFBTTtRQUNWLENBQUM7UUFDRCxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsS0FBSyxhQUFhO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLGFBQWE7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtRQUNWLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUztZQUNaLElBQUksQ0FBQyxTQUFTO2dCQUNkLEdBQUc7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ2pCLEdBQUc7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs4R0F6RVUsZUFBZTtrR0FBZixlQUFlLHNJQWZoQjs7Ozs7Ozs7Ozs7O1VBWUYseUVBYkUsWUFBWTs7MkZBZ0JYLGVBQWU7a0JBbkIzQixTQUFTOytCQUNFLFlBQVksY0FDVixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsWUFDYjs7Ozs7Ozs7Ozs7O1VBWUY7OEJBT0MsS0FBSztzQkFBYixLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElPcHRpb25zLCBJUHJvcHMsIElTdGF0ZSB9IGZyb20gJy4vYnV0dG9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZWstYnV0dG9uJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJ7eyBjbGFzc25hbWUgfX1cIj5cbiAgICA8aW1nXG4gICAgICAqbmdJZj1cInByb3BzLmxlZnRJY29uICYmIHByb3BzLmxlZnRJY29uICE9PSAnJ1wiXG4gICAgICBzcmM9XCJ7eyBwcm9wcy5sZWZ0SWNvbiB9fVwiXG4gICAgICBhbHQ9XCJcIlxuICAgIC8+XG4gICAge3sgcHJvcHMubGFiZWwgfX1cbiAgICA8aW1nXG4gICAgICAqbmdJZj1cInByb3BzLnJpZ2h0SWNvbiAmJiBwcm9wcy5yaWdodEljb24gIT09ICcnXCJcbiAgICAgIHNyYz1cInt7IHByb3BzLnJpZ2h0SWNvbiB9fVwiXG4gICAgICBhbHQ9XCJcIlxuICAgIC8+XG4gIDwvc3Bhbj5gLFxuICBzdHlsZXM6IGBgLFxufSlcbmV4cG9ydCBjbGFzcyBUZWtCdXR0b25Nb2R1bGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGFzc25hbWUgPVxuICAgICdyb3VuZGVkLVs1cHhdICBnYXAtWzRweF0gcHgtWzEycHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWzEycHhdIGZvbnQtWzUwMF0gbGVhZGluZy1bMTUwJV0gdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwJztcbiAgY2xhc3NlczogYW55ID0ge307XG4gIEBJbnB1dCgpIHByb3BzOiBJUHJvcHMgPSB7XG4gICAgbGVmdEljb246ICcnLFxuICAgIHJpZ2h0SWNvbjogJycsXG4gICAgbGVmdEljb25DbGFzczogJycsXG4gICAgcmlnaHRJY29uQ2xhc3M6ICcnLFxuICAgIGxhYmVsOiAnJyxcbiAgfTtcbiAgQElucHV0KCkgb3B0aW9uczogSU9wdGlvbnMgPSB7XG4gICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICBjbGFzczogJycsXG4gIH07XG4gIEBJbnB1dCgpIHN0YXRlOiBJU3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgYWN0aXZlOiB0cnVlLFxuICB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGBiZy1bIzA4MUE0Nl0gaG92ZXI6YmctWyMyRDM1NjZdIGN1cnNvci1wb2ludGVyIHRleHQtWyNmZmZdIGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb3V0bGluZSc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLVsjMkQzNTY2XSBib3JkZXIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLVsjMDgxQTQ2XSB0ZXh0LVsjMDgxQTQ2XSBob3Zlcjp0ZXh0LVsjZmZmXSBgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsdGVybmF0ZSc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYGJnLVsjRURFRUZGXSBob3ZlcjpiZy1bIzk1OTdEMV0gY3Vyc29yLXBvaW50ZXIgdGV4dC1bIzA4MUE0Nl0gYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYGJnLVsjRTVFN0VCXSBob3ZlcjpiZy1bI0QyRDZEQ10gY3Vyc29yLXBvaW50ZXIgdGV4dC1bIzZCNzI4MF0gYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgYmctWyMwNTdBNTVdIGhvdmVyOmJnLVsjMDM1NDNGXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjZmZmXSBgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYGJnLVsjREMyNjI2XSBob3ZlcjpiZy1bIzlCMUMxQ10gY3Vyc29yLXBvaW50ZXIgdGV4dC1bI2ZmZl0gYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGBiZy10cmFuc2FwYXJlbnQgdGV4dC1bIzU3NTNDOV0gaG92ZXI6dW5kZXJsaW5lIGN1cnNvci1wb2ludGVyIGA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5zaXplKSB7XG4gICAgICBjYXNlICdleHRyYS1zbWFsbCc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVsyNHB4XWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bMjRweF1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVs0MXB4XWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bNDhweF1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2V4dHJhLWxhcmdlJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzUycHhdYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bNDFweF1gO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzbmFtZSA9XG4gICAgICB0aGlzLmNsYXNzbmFtZSArXG4gICAgICAnICcgK1xuICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgK1xuICAgICAgdGhpcy5jbGFzc2VzLnNpemUgK1xuICAgICAgJyAnICtcbiAgICAgIHRoaXMub3B0aW9ucy5jbGFzcztcbiAgfVxufVxuIl19