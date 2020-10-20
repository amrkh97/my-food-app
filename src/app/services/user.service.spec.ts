import { TestBed } from '@angular/core/testing';	

import { UserService } from './user.service';	

describe('UserService', () => {	
  let service: UserService;	

  beforeEach(() => {	
    TestBed.configureTestingModule({});	
    service = TestBed.inject(UserService);	
  });	

  it('should be created', () => {	
    expect(service).toBeTruthy();	
  });	

  it('should check initial user data',()=>{
    expect(service.currentUser.name).toEqual('');
    expect(service.currentUser.password).toEqual('');
    expect(service.isLogged).toBeFalse();
  });
});