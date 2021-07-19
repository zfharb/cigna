import { visitBaseURL } from '../../fixtures/test-base';
import Header  from '../../page-objects/header';
import SignupPopup  from '../../page-objects/signupPopup';
import { CREDENTIALS } from '../../fixtures/constants';

describe('test suite for demoblaze site', () => {
      it('it should add samsung galaxy s6 to cart', () => {
        visitBaseURL();
        Header.clickSignupLink()
        SignupPopup.fillUsernameBox(CREDENTIALS.username)
        SignupPopup.fillPasswordBox(CREDENTIALS.password)
        SignupPopup.clickSignupButton()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.')
        })
        
      })
     
})
