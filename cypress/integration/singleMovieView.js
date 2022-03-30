describe('Single Movie View', () => {
  it('When a movie poster/card is clicked, a new view is loaded without any other movie titles.', () => {
    cy.visit('http://localhost:3000/')
      .get('.movie-container div:first')
      .click()
      .get('main')
      .should('not.contain', 'Mulan')
  });

  it('When a movie poster/card is clicked, the URL changes to the id of the clicked movie.', () => {
    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .url()
      .should('include', '/694919')
  })
})