import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getCurrentUrl(): Promise<string> {
    return browser.getCurrentUrl() as Promise<string> ;
  }


  // Registration Form:
  setUserName(userName:string){
    element(by.name('name')).sendKeys(userName);
  }

  setEmail(email:string){
    element(by.name('email')).sendKeys(email);
  }

  setPassword(pass:string){
    element(by.name('password')).sendKeys(pass);
  }

  setRePassword(pass:string){
    element(by.name('re_password')).sendKeys(pass);
  }

  agreeToTerms() {
    element(by.name('agree-term')).click();
  }

  clickRegisterUserButton(){
    element(by.css('.btn')).click();
  }

  getRegistrationButtonStatus(){
    return element(by.css('.btn')).getAttribute('disabled');
  }

  registerUserData(name: string, email:string, pass:string){
    this.setUserName(name);
    this.setEmail(email);
    this.setPassword(pass);
    this.setRePassword(pass);
  }


  //Food list:
  navigateToFoodList(){
    return browser.get('../foodlist');
  }

  navigateToFoodCart(){
    return browser.get('../cart');
  }

  checkInitialFoodLoaded(){
    return element.all(by.id('foodlistelements')).count();
    
  }

  addFoodToCart(idx:number){
    let foodButtons = element.all(by.id('foodlistelements'));
    foodButtons.get(idx).click();
  }

  checkFoodTotal(){
    return element(by.id('foodtotal')).getText();
  }

  clickViewCartFromList(){
    element.all(by.css('.btn-block')).last().click();
    let alert = browser.switchTo().alert();
    alert.dismiss();
  }


}
