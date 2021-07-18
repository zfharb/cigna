import Page from './page';
import ItemPage  from '../page-objects/itemPage';

const SELECTORS = {
};

class PhonesgPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    clickItemByName(itemName) {
        cy.get(`a:contains("${itemName}")`, { timeout: 10000 }).click({force: true});
    }    
}

export default new PhonesgPage();