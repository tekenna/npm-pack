import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekButtonModule } from './button.component';

describe('ButtonComponent', () => {
  let component: TekButtonModule;
  let fixture: ComponentFixture<TekButtonModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TekButtonModule]
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
