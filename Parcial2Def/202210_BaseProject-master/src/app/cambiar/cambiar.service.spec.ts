/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CambiarService } from './cambiar.service';

describe('Service: Cambiar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CambiarService]
    });
  });

  it('should ...', inject([CambiarService], (service: CambiarService) => {
    expect(service).toBeTruthy();
  }));
});
