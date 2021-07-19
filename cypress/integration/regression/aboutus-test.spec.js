import { visitBaseURL } from '../../fixtures/test-base';
import Header  from '../../page-objects/header';
import AboutusPopup from '../../page-objects/aboutusPopup'

describe('test suite for demoblaze site', () => {
      it('it should go to about us popup', () => {
        visitBaseURL();
        Header.clickAboutusLink();
        AboutusPopup.getTitle().should('have.text',"About us");
      })
     
})
