

describe('test suite for demoblaze site', () => {
      it('it should add samsung galaxy s6 to cart', () => {
        cy.request({
          method: 'POST',
          url: ' https://api.demoblaze.com/signup',
          body: {
            'password': "123",
            'username': "zztop1234567098123"
          }
        }).then((res) => {
          expect(res.status).to.eq(200);
          cy.log("zzzzzzzz")

          cy.log(res.body.data)
        })



       
      })
     
})
