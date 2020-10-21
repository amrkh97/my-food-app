import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Food App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  //Registration Page:
  it('should register a user', () => {
    page.navigateTo();
    page.setUserName('amr khaled');
    page.setEmail('amrkh97@gmail.com');
    page.setPassword('asdfasdf');
    page.setRePassword('asdfasdf');
    page.agreeToTerms();
    page.clickRegisterUserButton();
    expect(page.getCurrentUrl()).toContain('foodlist');
  });

  it('shouldn\'t register the user - No Data Entered -', () => {
    page.navigateTo();
    expect(page.getRegistrationButtonStatus()).toBeTruthy();
  });

  it('shouldn\'t register the user - Terms not agreed -',()=>{
    page.navigateTo();
    page.registerUserData('Amr Khaled', 'a@g.c', 'asdfasdf');
    expect(page.getRegistrationButtonStatus()).toBeTruthy();
  });


  //Food List Ordering:
  it('should check that food was loaded correctly', () => {
    page.navigateToFoodList();
    let x = page.checkInitialFoodLoaded();
    expect(x).toEqual(5);
  });

  //WIP
  it('should add a burger & a pizza to the cart', ()=>{
    page.navigateToFoodList();
    page.addFoodToCart(0); //Burger
    page.addFoodToCart(3); //Pizza
    page.clickViewCartFromList();
    //page.navigateToFoodCart();
    expect(page.checkFoodTotal()).toContain('165');
  });
  

});
