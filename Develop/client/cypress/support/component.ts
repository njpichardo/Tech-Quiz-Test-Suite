import { mount } from 'cypress/react';
import Quiz from '../../component/Quiz';

describe('Quiz Component', () => {
  it('renders correctly', () => {
    mount(<Quiz />);
    cy.get('.quiz-container').should('exist');
  });

  it('interacts correctly', () => {
    mount(<Quiz />);
    cy.get('.start-button').click();
    cy.get('.question').should('exist');
    cy.get('.answer-button').first().click();
    cy.get('.submit-button').click();
    cy.get('.score').should('exist');
  });
});