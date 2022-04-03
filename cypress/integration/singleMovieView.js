import { allMovies, singleMovie } from './data';

describe('Single Movie View', () => {
  it('When a movie poster/card is clicked, a new view is loaded without any other movie titles.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMovies);
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovie);

    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('main')
      .should('not.contain', 'Mulan');
  });

  it('When a movie poster/card is clicked, the title from that card matches the title on the new page.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMovies);
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovie);

    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('main')
      .should('contain', 'Money Plane');
  });

  it('When a movie poster/card is clicked, the following movie details are displayed: Rating, Genres, Runtime, and Year Released or Release Date.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMovies);
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovie);

    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('main')
      .should('contain', 'Rating')
      .and('contain', 'Genres')
      .and('contain', 'Runtime')
      .and('contain', 'Year released');
  });

  it('When a movie poster/card is clicked, the URL changes to the id of the clicked movie.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMovies);
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovie);

    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .url()
      .should('include', '/694919')
  });

  it('When a movie poster/card is clicked, then the back button is clicked, the URL returns to "/".', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMovies);
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovie);

    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  });

  it('When a movie poster/card is clicked, the header is with the title of the website is still there.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMovies);
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovie);

    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('header')
  });

  it('When the back button is clicked in SingleMovie view, it goes back to the homepage view with multiple movies and Rating, Genres, Runtime, and Year Released or Release Date are all hidden.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', allMovies);
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', singleMovie);
    
    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .click()
      .get('button')
      .click()
      .get('main')
      .should('not.contain', 'Rating')
      .and('not.contain', 'Genres')
      .and('not.contain', 'Runtime')
      .and('not.contain', 'Year released')
  })

  it('If network request fails, there is an error message on the page in place of any single movie details.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { forceNetworkError: true })

    cy.visit('http://localhost:3000/694919')
      .get('main')
      .contains('Sorry, something went wrong.');
  });
})