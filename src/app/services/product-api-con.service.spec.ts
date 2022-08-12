import { TestBed } from '@angular/core/testing';

import { ProductApiConService } from './product-api-con.service';

describe('ProductApiConService', () => {
  let service: ProductApiConService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductApiConService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
