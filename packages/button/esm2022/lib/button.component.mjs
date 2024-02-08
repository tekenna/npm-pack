import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
// import { CommonModule } from '@angular/common';
export class TekButtonComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TekButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: TekButtonComponent, selector: "tek-button", inputs: { props: "props", options: "options", state: "state" }, ngImport: i0, template: `<span class="{{ classname }}">
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
  </span>`, isInline: true, styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: TekButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tek-button', template: `<span class="{{ classname }}">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2J1dHRvbi9zcmMvbGliL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQUV6RCxrREFBa0Q7QUFtQmxELE1BQU0sT0FBTyxrQkFBa0I7SUFqQi9CO1FBa0JFLGNBQVMsR0FDUCxtSkFBbUosQ0FBQztRQUN0SixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ1QsVUFBSyxHQUFXO1lBQ3ZCLFFBQVEsRUFBRSxFQUFFO1lBQ1osU0FBUyxFQUFFLEVBQUU7WUFDYixhQUFhLEVBQUUsRUFBRTtZQUNqQixjQUFjLEVBQUUsRUFBRTtZQUNsQixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDTyxZQUFPLEdBQWE7WUFDM0IsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUNPLFVBQUssR0FBVztZQUN2QixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztLQXVESDtJQXJEQyxRQUFRO1FBQ04sUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2REFBNkQsQ0FBQztnQkFDckYsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw0R0FBNEcsQ0FBQztnQkFDcEksTUFBTTtZQUNSLEtBQUssV0FBVztnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxnRUFBZ0UsQ0FBQztnQkFDeEYsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxnRUFBZ0UsQ0FBQztnQkFDeEYsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2REFBNkQsQ0FBQztnQkFDckYsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyw2REFBNkQsQ0FBQztnQkFDckYsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGdFQUFnRSxDQUFDO2dCQUN4RixNQUFNO1FBQ1YsQ0FBQztRQUNELFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixLQUFLLGFBQWE7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssYUFBYTtnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxNQUFNO1FBQ1YsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTO1lBQ1osSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsR0FBRztnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDakIsR0FBRztnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDOzhHQXpFVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixrSEFmbkI7Ozs7Ozs7Ozs7OztVQVlGOzsyRkFHRyxrQkFBa0I7a0JBakI5QixTQUFTOytCQUNFLFlBQVksWUFDWjs7Ozs7Ozs7Ozs7O1VBWUY7OEJBT0MsS0FBSztzQkFBYixLQUFLO2dCQU9HLE9BQU87c0JBQWYsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElPcHRpb25zLCBJUHJvcHMsIElTdGF0ZSB9IGZyb20gJy4vYnV0dG9uLmludGVyZmFjZSc7XG4vLyBpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZWstYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8c3BhbiBjbGFzcz1cInt7IGNsYXNzbmFtZSB9fVwiPlxuICAgIDxpbWdcbiAgICAgICpuZ0lmPVwicHJvcHMubGVmdEljb24gJiYgcHJvcHMubGVmdEljb24gIT09ICcnXCJcbiAgICAgIHNyYz1cInt7IHByb3BzLmxlZnRJY29uIH19XCJcbiAgICAgIGFsdD1cIlwiXG4gICAgLz5cbiAgICB7eyBwcm9wcy5sYWJlbCB9fVxuICAgIDxpbWdcbiAgICAgICpuZ0lmPVwicHJvcHMucmlnaHRJY29uICYmIHByb3BzLnJpZ2h0SWNvbiAhPT0gJydcIlxuICAgICAgc3JjPVwie3sgcHJvcHMucmlnaHRJY29uIH19XCJcbiAgICAgIGFsdD1cIlwiXG4gICAgLz5cbiAgPC9zcGFuPmAsXG4gIHN0eWxlczogYGAsXG59KVxuZXhwb3J0IGNsYXNzIFRla0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsYXNzbmFtZSA9XG4gICAgJ3JvdW5kZWQtWzVweF0gIGdhcC1bNHB4XSBweC1bMTJweF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bMTJweF0gZm9udC1bNTAwXSBsZWFkaW5nLVsxNTAlXSB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAnO1xuICBjbGFzc2VzOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgcHJvcHM6IElQcm9wcyA9IHtcbiAgICBsZWZ0SWNvbjogJycsXG4gICAgcmlnaHRJY29uOiAnJyxcbiAgICBsZWZ0SWNvbkNsYXNzOiAnJyxcbiAgICByaWdodEljb25DbGFzczogJycsXG4gICAgbGFiZWw6ICcnLFxuICB9O1xuICBASW5wdXQoKSBvcHRpb25zOiBJT3B0aW9ucyA9IHtcbiAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgIGNsYXNzOiAnJyxcbiAgfTtcbiAgQElucHV0KCkgc3RhdGU6IElTdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBhY3RpdmU6IHRydWUsXG4gIH07XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMudHlwZSkge1xuICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYGJnLVsjMDgxQTQ2XSBob3ZlcjpiZy1bIzJEMzU2Nl0gY3Vyc29yLXBvaW50ZXIgdGV4dC1bI2ZmZl0gYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvdXRsaW5lJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctWyMyRDM1NjZdIGJvcmRlciBjdXJzb3ItcG9pbnRlciBib3JkZXItWyMwODFBNDZdIHRleHQtWyMwODFBNDZdIGhvdmVyOnRleHQtWyNmZmZdIGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWx0ZXJuYXRlJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgYmctWyNFREVFRkZdIGhvdmVyOmJnLVsjOTU5N0QxXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjMDgxQTQ2XSBgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgYmctWyNFNUU3RUJdIGhvdmVyOmJnLVsjRDJENkRDXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjNkI3MjgwXSBgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSA9IGBiZy1bIzA1N0E1NV0gaG92ZXI6YmctWyMwMzU0M0ZdIGN1cnNvci1wb2ludGVyIHRleHQtWyNmZmZdIGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLmRpc3BsYXkgPSBgYmctWyNEQzI2MjZdIGhvdmVyOmJnLVsjOUIxQzFDXSBjdXJzb3ItcG9pbnRlciB0ZXh0LVsjZmZmXSBgO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5kaXNwbGF5ID0gYGJnLXRyYW5zYXBhcmVudCB0ZXh0LVsjNTc1M0M5XSBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXIgYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnNpemUpIHtcbiAgICAgIGNhc2UgJ2V4dHJhLXNtYWxsJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzI0cHhdYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVsyNHB4XWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgdGhpcy5jbGFzc2VzLnNpemUgPSBgIGgtWzQxcHhdYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVs0OHB4XWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXh0cmEtbGFyZ2UnOlxuICAgICAgICB0aGlzLmNsYXNzZXMuc2l6ZSA9IGAgaC1bNTJweF1gO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5zaXplID0gYCBoLVs0MXB4XWA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuY2xhc3NuYW1lID1cbiAgICAgIHRoaXMuY2xhc3NuYW1lICtcbiAgICAgICcgJyArXG4gICAgICB0aGlzLmNsYXNzZXMuZGlzcGxheSArXG4gICAgICB0aGlzLmNsYXNzZXMuc2l6ZSArXG4gICAgICAnICcgK1xuICAgICAgdGhpcy5vcHRpb25zLmNsYXNzO1xuICB9XG59XG4iXX0=