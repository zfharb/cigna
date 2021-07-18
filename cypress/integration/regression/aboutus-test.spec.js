import { visitBaseURL } from '../../fixtures/test-base';
import Header  from '../../page-objects/header';



describe('test suite for demoblaze site', () => {
      it('it should go to about us popup', () => {
        visitBaseURL();
        let aboutusPopup = Header.clickAboutusLink();
        aboutusPopup.getTitle().should('have.text',"About us");
      })
     
})
