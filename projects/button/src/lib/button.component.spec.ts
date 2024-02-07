import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekButtonModule } from './button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ButtonComponent', () => {
  let component: TekButtonModule;
  let fixture: ComponentFixture<TekButtonModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TekButtonModule],
      declarations: [ TekButtonModule ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TekButtonModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
