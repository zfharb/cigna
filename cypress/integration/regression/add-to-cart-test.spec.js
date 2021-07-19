import { visitBaseURL } from '../../fixtures/test-base';
import LandingPage  from '../../page-objects/landingPage';
import PhonesgPage  from '../../page-objects/PhonesPage';
import CartPage  from '../../page-objects/cartPage';
import Header  from '../../page-objects/header';
import ItemPage  from '../../page-objects/itemPage';

describe('test suite for demoblaze site', () => {
      it('it should add samsung galaxy s6 to cart', () => {
        visitBaseURL();
        LandingPage.clickPhoneLink()
        PhonesgPage.clickItemByName('Samsung galaxy s6')
        ItemPage.clickAddToCartButton();
        Header.clickCartLink();
        CartPage.verifyItemTitle('Samsung galaxy s6');
      })
     
})
