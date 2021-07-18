

describe('test suite to validate that all items can be viewed', () => {
    it('it should get all items', () => {
      cy.request({
        method: 'get',
        url: 'https://api.demoblaze.com/entries',
        
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.Items[0]).has.property('cat', 'phone');

      })



     
    })
   
})
