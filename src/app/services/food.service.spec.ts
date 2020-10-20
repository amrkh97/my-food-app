import { TestBed } from '@angular/core/testing';	

import { FoodService } from './food.service';	

describe('FoodService', () => {	
  let service: FoodService;	

  beforeEach(() => {	
    TestBed.configureTestingModule({});	
    service = TestBed.inject(FoodService);	
  });	

  it('should be created', () => {	
    expect(service).toBeTruthy();	
  });	

  it('should check food avialable',()=>{
    expect(service.listOfFood.length).toEqual(5);
    expect(service.orderedFood.length).toEqual(0); // Initially there is no food ordered.
  });
});