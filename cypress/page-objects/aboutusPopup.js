import Page from './page';

const SELECTORS = {
    TITLE: '#videoModalLabel'

};

class AboutusPopup extends Page {
    constructor() {
        super(SELECTORS);
    }

    getTitle() {
        cy.wait(2000)
        return cy.get(SELECTORS.TITLE, { timeout: 10000 })
    }
}

export default new AboutusPopup();