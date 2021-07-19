import { visitBaseURL } from '../../fixtures/test-base';
import LandingPage  from '../../page-objects/landingPage';

describe('test suite for demoblaze site', () => {
      it('it should have carousel and arrows on landing page', () => {
        visitBaseURL();
        LandingPage.verifyCarousel();
        LandingPage.verifyNextArrow();
        LandingPage.verifyPreviousArrow();     
      })
     
})
