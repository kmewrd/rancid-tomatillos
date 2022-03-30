describe('Single Movie View', () => {
  it('When a movie poster/card is clicked, a new view is loaded without any other movie titles.', () => {
    cy.visit('http://localhost:3000/')
      .get('.movie-container div:first')
      .click()
      .get('main')
      .should('not.contain', 'Mulan')
  });

  it('When a movie poster/card is clicked, the title from that card matches the title on the new page.', () => {
    cy.visit('http://localhost:3000/')
      .get('.movie-container div:first')
      .click()
      .get('main')
      .should('contain', 'Money Plane')
  });

  it('When a movie poster/card is clicked, the following movie details are displayed: Rating, Genres, Runtime, and Year Released or Release Date.', () => {
    cy.visit('http://localhost:3000/')
      .get('.movie-container div:first')
      .click()
      .get('main')
      .should('contain', 'Rating')
      .and('contain', 'Genres')
      .and('contain', 'Runtime')
      .and('contain', 'Year released')
  });

  it('When a movie poster/card is clicked, the URL changes to the id of the clicked movie.', () => {
    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .url()
      .should('include', '/694919')
  });

  it('When a movie poster/card is clicked, then the back button is clicked, the URL returns to "/".', () => {
    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  });

  it('When a movie poster/card is clicked, the header is with the title of the website is still there.', () => {
    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('header')
  })
})