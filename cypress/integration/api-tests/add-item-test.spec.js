

describe('test suite for demoblaze site', () => {
      it('it should add samsung galaxy s6 to cart', () => {
        cy.request({
          method: 'POST',
          url: 'https://api.demoblaze.com/addtocart',
          body: {
            "cookie": "user=8efdf1ea-6ff8-146b-73d9-5f41a654ac9a",
            "flag": "false",
            "id": "586be94d-7fef-fe1b-016c-b40a9fa507b0",
            "prod_id": "1"
          }
        }).then((res) => {
          expect(res.status).to.eq(200)
        })



       
      })
     
})
