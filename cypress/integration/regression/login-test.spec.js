import { visitBaseURL } from '../../fixtures/test-base';
import Header  from '../../page-objects/header';
import SignupPopup  from '../../page-objects/signupPopup';
import LoginPopup  from '../../page-objects/loginPopup';
import { CREDENTIALS } from '../../fixtures/constants';


describe('test suite for demoblaze site', () => {
    let username = CREDENTIALS.username;
    let password = CREDENTIALS.password;

      it('it should add samsung galaxy s6 to cart', () => {
        
        visitBaseURL();
        Header.clickSignupLink()
        SignupPopup.fillUsernameBox(username)
        SignupPopup.fillPasswordBox(password)
        SignupPopup.clickSignupButton()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.')
        })
        cy.on('window:confirm', () => true)

        Header.clickLoginLink()
        LoginPopup.fillUsernameBox(username)
        LoginPopup.fillPasswordBox(password)
        LoginPopup.clickLoginButton()

        Header.verifyLoginUser(username)

      })
     
})
