import Page from './page';

const SELECTORS = {
    CARDS_TABLE: '#tbodyid'
};

class PhonesgPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    clickItemByName(itemName) {
        cy.get(SELECTORS.CARDS_TABLE).get(`a:contains("${itemName}")`, { timeout: 10000 }, { multiple: false }).click({force: true});
    }    
}

export default new PhonesgPage();