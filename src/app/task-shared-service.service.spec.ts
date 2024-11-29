import { TestBed } from '@angular/core/testing';

import { TaskSharedServiceService } from './task-shared-service.service';

describe('TaskSharedServiceService', () => {
  let service: TaskSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
