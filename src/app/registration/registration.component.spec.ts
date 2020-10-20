import { ComponentFixture, TestBed } from '@angular/core/testing';	
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration.component';	
import { FormsModule } from '@angular/forms';


describe('RegistrationComponent', () => {	
  let component: RegistrationComponent;	
  let fixture: ComponentFixture<RegistrationComponent>;	

  beforeEach(async () => {	
    await TestBed.configureTestingModule({	
      declarations: [ RegistrationComponent ]	,
      imports: [RouterTestingModule, FormsModule]
    })	
    .compileComponents();	
  });	

  beforeEach(() => {	
    fixture = TestBed.createComponent(RegistrationComponent);	
    component = fixture.componentInstance;	
    fixture.detectChanges();	
  });	

  it('should create', () => {	
    expect(component).toBeTruthy();	
  });	
});