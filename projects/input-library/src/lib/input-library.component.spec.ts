import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLibraryComponent } from './input-library.component';

describe('InputLibraryComponent', () => {
  let component: InputLibraryComponent;
  let fixture: ComponentFixture<InputLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
