import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekButtonComponent} from './button.component';
import { IOptions, IProps, IState } from './button.interface';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ButtonComponent', () => {
  let component: TekButtonComponent;
  let fixture: ComponentFixture<TekButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TekButtonComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TekButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
