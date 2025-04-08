export {};  
declare global {  
  namespace Cypress {  
    interface Chainable {  
      login(username: string, password: string): Chainable<Element>;  
    }  
  }  
}  
Cypress.Commands.add('login', (username, password) => {  
  cy.request('POST', '/api/login', { username, password }).then((resp) => {  
    window.localStorage.setItem('token', resp.body.token);  
  });  
});  