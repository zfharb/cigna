// import Page from './page';
import ContactPopup  from '../page-objects/contactPopup';
import AboutusPopup  from '../page-objects/aboutusPopup';

import CartPage  from '../page-objects/cartPage';

const SELECTORS = {
    NAV_BAR: "#navbarExample",
    CONTACT_LINK: "Contact",
    ABOUTUS_LINK: "About us",
    CART_LINK: "Cart",
    SIGN_UP_LINK: '#signin2',
    LOG_IN_LINK: '#login2',
    LOG_IN_USER_NAME: '#nameofuser'
    
};

class Header {
    constructor() {
    }

    clickContactLink() {
        cy.get(SELECTORS.NAV_BAR, { timeout: 10000 }).contains(SELECTORS.CONTACT_LINK).click({force: true});       
    }

    clickAboutusLink() {
        cy.get(SELECTORS.NAV_BAR, { timeout: 10000 }).contains(SELECTORS.ABOUTUS_LINK).click({force: true});       
    }

    clickCartLink() {
        cy.get(`a:contains("${SELECTORS.CART_LINK}")`, { timeout: 10000 }).click({force: true});
    }

    clickSignupLink() {
        cy.get(SELECTORS.SIGN_UP_LINK, { timeout: 10000 }).click({force: true});
    }

    clickLoginLink() {
        cy.get(SELECTORS.LOG_IN_LINK, { timeout: 10000 }).click({force: true});
    }

    verifyLoginUser(username) {
        cy.get(SELECTORS.LOG_IN_USER_NAME, { timeout: 10000 }).should('have.text',`Welcome ${username}`);
    }

}

export default new Header();