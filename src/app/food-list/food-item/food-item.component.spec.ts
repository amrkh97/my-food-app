import { ComponentFixture, TestBed } from '@angular/core/testing';	
import { RouterTestingModule } from '@angular/router/testing';
import { FoodListComponent } from '../food-list.component';
import { FoodItemComponent } from './food-item.component';	

describe('FoodItemComponent', () => {	
  let component: FoodItemComponent;	
  let fixture: ComponentFixture<FoodItemComponent>;	

  beforeEach(async () => {	
    await TestBed.configureTestingModule({	
      declarations: [ FoodItemComponent ],
      imports:[RouterTestingModule.withRoutes([{path: 'foodlist', component: FoodListComponent}])]
    })	
    .compileComponents();	
  });	

  beforeEach(() => {	
    fixture = TestBed.createComponent(FoodItemComponent);	
    component = fixture.componentInstance;	
    fixture.detectChanges();	
  });	

  it('should create', () => {	

    expect(component).toBeTruthy();	
  });	
});