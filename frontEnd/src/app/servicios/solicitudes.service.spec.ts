import { TestBed } from '@angular/core/testing';


import { MascotasService } from './solicitudes.service';

describe('SolicitudesService', () => {
  let service: MascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
