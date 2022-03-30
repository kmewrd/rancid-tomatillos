describe('Home Page', () => {
  it('Should have a heading containing the title of the website (Rancid Tomatillos).', () => {
    cy.visit('http://localhost:3000/')
      .get('header')
      .contains('Rancid Tomatillos');
  });

  it('Should contain a grid of movies posters.', () => {
    cy.visit('http://localhost:3000/')
      .get('.movie-container div:first')
      .should('have.class', 'movie-poster');
  });

  it('Movie posters should have an image, title, and release year.', () => {
    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .should('contain', 'Money Plane')
      .and('contain', '2020')
      .find('img[class="poster-image"]');
  });
});