import { visitBaseURL } from '../../fixtures/test-base';
import Header  from '../../page-objects/header';



describe('test suite for demoblaze site', () => {
      it('it should send a message to demoblaze', () => {
        visitBaseURL();
        let contactPopup = Header.clickContactButton();
        contactPopup.enterEmail('signa@mail.com')
        contactPopup.enterName('ziad harb')
        contactPopup.enterMessage('testing')
        contactPopup.clickSendMessage()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Thanks for the message!!')
        })
      })
     
})
