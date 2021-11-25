import { TestBed } from '@angular/core/testing';

import { ColorVoteService } from './color-vote.service';

describe('ColorVoteService', () => {
  let service: ColorVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
