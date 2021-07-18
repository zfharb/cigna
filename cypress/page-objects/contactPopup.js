import Page from './page';

const SELECTORS = {
    ENTER_EMAIL_BOX: '#recipient-email',
    ENTER_NAME_BOX: '#recipient-name',
    ENTER_MESSAGE_BOX: '#message-text',
    SEND_MESSAGE_BUTTON: 'Send message'
    

};

class Contact extends Page {
    constructor() {
        super(SELECTORS);
    }

    enterEmail(email) {
        cy.wait(2000)
        cy.get(SELECTORS.ENTER_EMAIL_BOX, { timeout: 10000 }).type(email);
        cy.wait(2000)
    }

    enterName(name) {
        cy.wait(2000)
        cy.get(SELECTORS.ENTER_NAME_BOX, { timeout: 10000 }).type(name);
        cy.wait(2000)
    }

    enterMessage(message) {
        cy.wait(2000)
        cy.get(SELECTORS.ENTER_MESSAGE_BOX, { timeout: 10000 }).type(message);
        cy.wait(2000)
    }

    clickSendMessage() {
        cy.get(`button:contains("${SELECTORS.SEND_MESSAGE_BUTTON}")`, { timeout: 10000 }).click({force: true});
        cy.wait(2000)
    }
   
}

export default new Contact();