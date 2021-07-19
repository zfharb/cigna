import Page from './page';

const SELECTORS = {
    PHONE_LINK: 'Phones',
    CAROUSEL:'#carouselExampleIndicators',
    CAROUSEL_NEXT_ARROW: '.carousel-control-next-icon',
    CAROUSEL_PREVIOUS_ARROW: '.carousel-control-prev-icon',

};

class LandingPage extends Page {
    constructor() {
        super(SELECTORS);
    }

    clickPhoneLink() {
        cy.get(`a:contains("${SELECTORS.PHONE_LINK}")`, { timeout: 10000 }).click({force: true});
    }

    verifyNextArrow() {
        cy.get(SELECTORS.CAROUSEL_NEXT_ARROW, { timeout: 10000 }).should('exist');
    }

    verifyPreviousArrow() {
        cy.get(SELECTORS.CAROUSEL_PREVIOUS_ARROW, { timeout: 10000 }).should('exist');
    }

    verifyCarousel() {
        cy.get(SELECTORS.CAROUSEL, { timeout: 10000 }).get('[alt="First slide"]').should('exist');
        cy.get(SELECTORS.CAROUSEL, { timeout: 10000 }).get('[alt="Second slide"]').should('exist');
        cy.get(SELECTORS.CAROUSEL, { timeout: 10000 }).get('[alt="Third slide"]').should('exist');
    }
}

export default new LandingPage();