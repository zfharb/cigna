
import { CREDENTIALS } from '../../fixtures/constants';

describe('test suite to validate that a new user can be created', () => {


    var username = CREDENTIALS.username

    it('it should sign up a user', () => {
      cy.request({
        method: 'POST',
        url: ' https://api.demoblaze.com/signup',
        body: {
          'password': CREDENTIALS.password,
          'username': username
        }
      }).then((res) => {
        expect(res.status).to.eq(200);
      })     
    })


    it('it should login with the signup user in the previous test', () => {
      cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/login',
        body: {
          'password': CREDENTIALS.password,
          'username': username
        }
      }).then((res) => {
        expect(res.status).to.eq(200);
      })     
    })
   
})
