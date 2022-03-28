describe('App', () => {
  it('Should have a heading containing the title of the website (Rancid Tomatillos).', () => {
    cy.visit('http://localhost:3000/')
      .get('header')
      .contains('Rancid Tomatillos');
  });

  it('Should contain a grid of movies posters.', () => {
    cy.visit('http://localhost:3000/')
      .get('.movie-container')
      .children('div')
      .should('have.class', 'movie-poster')
  });
})