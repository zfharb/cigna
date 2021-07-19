import { visitBaseURL } from '../../fixtures/test-base';
import Header  from '../../page-objects/header';

describe('test suite for demoblaze site', () => {
      it('it should verify page logo href', () => {
        visitBaseURL();
        Header.verifyPageLogo();
      })
})
