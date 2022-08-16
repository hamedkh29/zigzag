import { TestBed } from '@angular/core/testing';

import { ResultService } from './result.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

describe('ResultService', () => {
  let service: ResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DatePipe],
    });
    service = TestBed.inject(ResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be return 20220711', () => {
    expect(service.transformDate(new Date(2022, 6, 11))).toEqual('20220711');
  });
});
