var baseURL = 'https://www.demoblaze.com/index.html';

export function visitBaseURL() {
    cy.visit(baseURL,  {
        onLoad: () => console.log('*** PAGE IS LOADED ***')
      });
    // cy.wait(10000)


};