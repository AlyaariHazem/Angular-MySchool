import { TestBed } from '@angular/core/testing';

import { StudentsServicesService } from './students-services.service';

describe('StudentsServicesService', () => {
  let service: StudentsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
