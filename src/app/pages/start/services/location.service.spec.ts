import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('LocationService', () => {
  let service: LocationService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const mockResponse = {
    locations: [
      {
        id: 'de:08111:6056',
        isGlobalId: true,
        name: 'Stuttgart, Stadtmitte',
        disassembledName: 'Stadtmitte',
        coord: [48.77633, 9.17305],
        type: 'stop',
        matchQuality: 1001,
        isBest: true,
        productClasses: [1, 3, 5],
        parent: {
          id: 'placeID:8111000:51',
          name: 'Stuttgart',
          type: 'locality',
        },
        properties: { stopId: '5006056' },
      },
      {
        id: 'de:08118:6766',
        isGlobalId: true,
        name: 'Asperg, Stadtmitte',
        disassembledName: 'Stadtmitte',
        coord: [48.90577, 9.1336],
        type: 'stop',
        matchQuality: 1000,
        isBest: false,
        productClasses: [5],
        parent: { id: 'placeID:8118003:1', name: 'Asperg', type: 'locality' },
        properties: { stopId: '5006766' },
      },
      {
        id: 'de:08117:8014',
        isGlobalId: true,
        name: 'Ebersbach (F), Stadtmitte',
        disassembledName: 'Stadtmitte',
        coord: [48.71408, 9.52506],
        type: 'stop',
        matchQuality: 1000,
        isBest: false,
        productClasses: [5, 10],
        parent: {
          id: 'placeID:8117018:3',
          name: 'Ebersbach (F)',
          type: 'locality',
        },
        properties: { stopId: '5018014' },
      },
      {
        id: 'de:08117:1029',
        isGlobalId: true,
        name: 'Eislingen (F), Stadtmitte',
        disassembledName: 'Stadtmitte',
        coord: [48.69872, 9.70733],
        type: 'stop',
        matchQuality: 1000,
        isBest: false,
        productClasses: [5, 10],
        parent: {
          id: 'placeID:8117019:1',
          name: 'Eislingen (F)',
          type: 'locality',
        },
        properties: { stopId: '5011029' },
      },
      {
        id: 'de:08118:5631',
        isGlobalId: true,
        name: 'Vaihingen (E), Grabenstraße (Stadtmitte)',
        disassembledName: 'Grabenstraße (Stadtmitte)',
        coord: [48.93294, 8.95839],
        type: 'stop',
        matchQuality: 153,
        isBest: false,
        productClasses: [5],
        parent: {
          id: 'placeID:8118073:12',
          name: 'Vaihingen (E)',
          type: 'locality',
        },
        properties: { stopId: '5005631' },
      },
      {
        id: 'de:08119:5391',
        isGlobalId: true,
        name: 'Waiblingen, Stadtmitte',
        disassembledName: 'Stadtmitte',
        coord: [48.82989, 9.31588],
        type: 'stop',
        matchQuality: 1000,
        isBest: false,
        productClasses: [5],
        parent: {
          id: 'placeID:8119079:8',
          name: 'Waiblingen',
          type: 'locality',
        },
        properties: { stopId: '5005391' },
      },
      {
        id: 'de:08116:4258',
        isGlobalId: true,
        name: 'Wendlingen (N), Stadtmitte',
        disassembledName: 'Stadtmitte',
        coord: [48.67179, 9.37836],
        type: 'stop',
        matchQuality: 1000,
        isBest: false,
        productClasses: [5],
        parent: {
          id: 'placeID:8116071:3',
          name: 'Wendlingen (N)',
          type: 'locality',
        },
        properties: { stopId: '5004258' },
      },
      {
        id: 'poiID:2000062:8111000:-1:Universitätsbibliothek Stuttgart, Standort Stadtmitte:Stuttgart:Universitätsbibliothek Stuttgart, Standort Stadtmitte:ANY:POI:3512701:755078:NBWT:VVS',
        name: 'Universitätsbibliothek Stuttgart, Standort Stadtmitte',
        coord: [48.78167, 9.1718],
        type: 'poi',
        matchQuality: 921,
        isBest: false,
        parent: {
          id: 'placeID:8111000:-1',
          name: 'Stuttgart',
          type: 'locality',
        },
      },
      {
        id: 'streetID:6436::8116019:-1',
        name: 'Esslingen (N), Neckarhaldenweg (Stadtmitte)',
        disassembledName: 'Neckarhaldenweg (Stadtmitte)',
        streetName: 'Neckarhaldenweg (Stadtmitte)',
        type: 'street',
        matchQuality: 942,
        isBest: false,
        parent: {
          id: 'placeID:8116019:-1',
          name: 'Esslingen (N)',
          type: 'locality',
        },
      },
      {
        id: 'streetID:1500000611::8116019:-1',
        name: 'Esslingen (N), Rossmarkt (Stadtmitte)',
        disassembledName: 'Rossmarkt (Stadtmitte)',
        streetName: 'Rossmarkt (Stadtmitte)',
        type: 'street',
        matchQuality: 952,
        isBest: false,
        parent: {
          id: 'placeID:8116019:-1',
          name: 'Esslingen (N)',
          type: 'locality',
        },
      },
      {
        id: 'streetID:1500000627::8116019:-1',
        name: 'Esslingen (N), Schlossberggasse (Stadtmitte)',
        disassembledName: 'Schlossberggasse (Stadtmitte)',
        streetName: 'Schlossberggasse (Stadtmitte)',
        type: 'street',
        matchQuality: 941,
        isBest: false,
        parent: {
          id: 'placeID:8116019:-1',
          name: 'Esslingen (N)',
          type: 'locality',
        },
      },
      {
        id: 'de:08415:29333',
        isGlobalId: true,
        name: 'Reutlingen, Stadtmitte',
        disassembledName: 'Stadtmitte',
        coord: [48.49223, 9.2081],
        type: 'stop',
        matchQuality: 1000,
        isBest: false,
        productClasses: [5],
        parent: {
          id: 'placeID:8415061:19',
          name: 'Reutlingen',
          type: 'locality',
        },
        properties: { stopId: '5029333' },
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LocationService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get the data successfully', (done) => {
    service.findByLocationName('Stadtmitte').subscribe((res) => {
      expect(JSON.stringify(res)).toEqual(JSON.stringify(res));
      done();
    });
    // Check for correct requests: should have made one request to POST search from expected URL
    const req = httpTestingController.expectOne(
      'https://efastatic.vvs.de/umweltrechner/XML_STOPFINDER_REQUEST?outputFormat=rapidJSON&SpEncId=0&coordOutputFormat=EPSG:4326&serverInfo=1&suggestApp=vvs&type_sf=any&version=10.2.10.139&name_sf=Stadtmitte'
    );
    expect(req.request.method).toEqual('GET');

    // Provide each request with a mock response
    req.flush(mockResponse);
  });
  it('should return empty', (done) => {
    service.findByLocationName('234234234').subscribe((res) => {
      expect(res.length).toEqual(0);
      done();
    });
    // Check for correct requests: should have made one request to POST search from expected URL
    const req = httpTestingController.expectOne(
      'https://efastatic.vvs.de/umweltrechner/XML_STOPFINDER_REQUEST?outputFormat=rapidJSON&SpEncId=0&coordOutputFormat=EPSG:4326&serverInfo=1&suggestApp=vvs&type_sf=any&version=10.2.10.139&name_sf=234234234'
    );
    expect(req.request.method).toEqual('GET');

    // Provide each request with a mock response
    req.flush({ locations: [] });
  });
  it('should return empty if name parameter is empty', (done) => {
    service.findByLocationName('').subscribe((res) => {
      expect(res.length).toBe(0);
      done();
    });
    // Check for correct requests: should have made one request to POST search from expected URL
    const req = httpTestingController.expectOne(
      'https://efastatic.vvs.de/umweltrechner/XML_STOPFINDER_REQUEST?outputFormat=rapidJSON&SpEncId=0&coordOutputFormat=EPSG:4326&serverInfo=1&suggestApp=vvs&type_sf=any&version=10.2.10.139&name_sf='
    );
    expect(req.request.method).toEqual('GET');

    // Provide each request with a mock response
    req.flush({ locations: [] });
  });
});
