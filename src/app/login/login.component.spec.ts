import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';	
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms'
import { Location } from "@angular/common";
import { Router, Routes } from "@angular/router";
import { LoginComponent } from './login.component';	
import { by, element } from 'protractor';
import { UserService } from '../services/user.service';


describe('LoginComponent', () => {	
  let component: LoginComponent;	
  let fixture: ComponentFixture<LoginComponent>;	
  let location: Location;
  let router: Router;

  const routes: Routes = [
    {path:'', component: LoginComponent}
  ];
  
  beforeEach(async () => {	
    await TestBed.configureTestingModule({	
      declarations: [ LoginComponent]	,
      imports:[RouterTestingModule.withRoutes(routes), FormsModule],
      providers:[UserService]
    })	
    .compileComponents();	
  });	

  beforeEach(() => {	
    fixture = TestBed.createComponent(LoginComponent);	
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture.detectChanges();	
  });	


  it('should create', () => {	
    expect(component).toBeTruthy();	
  });	

  
  it('should register a user', fakeAsync(() => {

    console.log("Entered the registration test!");
    //let name = element(by.name('name'));
    //name.sendKeys('Amr');
    //element(by.name('email')).sendKeys('amrkh97@gmail.com');
    //element(by.name('password')).sendKeys('asdfasdf');
    //element(by.name('re_password')).sendKeys('asdfasdf');
    //element(by.name('agree-term')).click();
    //element(by.css('.btn')).click();
    tick();
    expect(location.path()).toBe('/foodlist');

  }));
  




});