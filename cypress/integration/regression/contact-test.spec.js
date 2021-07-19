import { visitBaseURL } from '../../fixtures/test-base';
import Header  from '../../page-objects/header';
import ContactusPopup from '../../page-objects/contactusPopup';

describe('test suite for demoblaze site', () => {
      it('it should send a message to demoblaze', () => {
        visitBaseURL();
        Header.clickContactLink();
        ContactusPopup.enterEmail('signa@mail.com')
        ContactusPopup.enterName('ziad harb')
        ContactusPopup.enterMessage('testing')
        ContactusPopup.clickSendMessage()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Thanks for the message!!')
        })
      })
     
})
