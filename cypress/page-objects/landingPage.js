import Page from './page';

const SELECTORS = {
    PHONE_LINK: 'Phones',
};

class LandingPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    clickPhoneLink() {
        cy.get(`a:contains("${SELECTORS.PHONE_LINK}")`, { timeout: 10000 }).click({force: true});
    }
    
}

export default new LandingPage();