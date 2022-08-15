import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('LocationService', () => {
  let service: LocationService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LocationService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get the data successfully', (done) => {
    service.FindByLocationName('Stadtmitte').subscribe((res) => {
      expect(res.length).toBeGreaterThan(0);
      expect(res[0].disassembledName).toBe('Stadtmitte');
      done();
    });
  });
  it('should return empty', (done) => {
    service.FindByLocationName('234234234').subscribe((res) => {
      expect(res.length).toBe(0);
      done();
    });
  });
  it('should return empty if name parameter is empty', (done) => {
    service.FindByLocationName('').subscribe((res) => {
      expect(res.length).toBe(0);
      done();
    });
  });
});
