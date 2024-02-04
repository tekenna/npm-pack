import { TestBed } from '@angular/core/testing';

import { InputLibraryService } from './input-library.service';

describe('InputLibraryService', () => {
  let service: InputLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
