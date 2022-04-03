import { allMovies } from './data.js';

describe('Home Page', () => {
  it('Should have a heading containing the title of the website (Rancid Tomatillos).', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('header')
      .contains('Rancid Tomatillos');
  });

  it('Should contain a grid of movies posters.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('.movie-container div:first')
      .should('have.class', 'movie-poster');
  });

  it('Movie posters should have an image, title, and release year.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('div[id="694919"]')
      .should('contain', 'Money Plane')
      .and('contain', '2020')
      .find('img[class="poster-image"]');
  });

  it('If network request fails, there is an error message on the homepage in place of a movies grid.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      { forceNetworkError: true }
    );

    cy.visit('http://localhost:3000/')
      .get('main')
      .contains('Sorry, something went wrong.');
  });

  it('Should be able to click on the Sort dropdown menu and see and select from a list of options.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('Alphabetically (A-Z)')
      .select('Alphabetically (Z-A)')
      .select('By Rating Ascending')
      .select('By Rating Descending');
  });

  it('When homepage is visited, all movies are sorted alphabetically from a to z on page load.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('.movie-container div:first')
      .should('contain', 'After We Collided');

    cy.visit('http://localhost:3000/')
      .get('.movie-container div:last')
      .should('contain', 'Trolls World Tour');
  });

  it('When sort menu option "Alphabetically (Z-A)" is selected, the movies should automatically re order to match new criteria.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('Alphabetically (Z-A)')
      .get('.movie-container div:first')
      .should('contain', 'Trolls World Tour');

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('Alphabetically (Z-A)')
      .get('.movie-container div:last')
      .should('contain', 'After We Collided');
  });

  it('When sort menu option "By Rating Ascending" is selected, the movies should automatically re order to match new criteria.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('By Rating Ascending')
      .get('.movie-container div:first')
      .should('contain', 'The Crimes That Bind');

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('By Rating Ascending')
      .get('.movie-container div:last')
      .should('contain', 'Peninsula');
  });

  it('When sort menu option "By Rating Descending" is selected, the movies should automatically re order to match new criteria.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('By Rating Descending')
      .get('.movie-container div:last')
      .should('contain', 'The Crimes That Bind');

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('By Rating Descending')
      .get('.movie-container div:first')
      .should('contain', 'Peninsula');
  });

  it('When sort menu option "Alphabetically (A-Z)" is selected, the movies should automatically re order to match new criteria.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('By Rating Descending')
      .select('Alphabetically (A-Z)')
      .get('.movie-container div:first')
      .should('contain', 'After We Collided');

    cy.visit('http://localhost:3000/')
      .get('select[name="sort"]')
      .select('By Rating Descending')
      .select('Alphabetically (A-Z)')
      .get('.movie-container div:last')
      .should('contain', 'Trolls World Tour');
  });

  it('Should be able to click on the Filter dropdown menu and see and select from a list of options.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('select[name="filter"]')
      .select('Ratings above 5')
      .select('Ratings above 6')
      .select('Ratings above 7');
  });

  it('When "Ratings above 5" is selected in the filter menu, the movies matching the criteria should be displayed.', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      allMovies
    );

    cy.visit('http://localhost:3000/')
      .get('select[name="filter"]')
      .select('Ratings above 5')
      .get('.movie-container div:first')
      .should('contain', 'After We Collided');

    cy.visit('http://localhost:3000/')
      .get('select[name="filter"]')
      .select('Ratings above 5')
      .get('.movie-container div:last')
      .should('contain', 'Trolls World Tour');
  });



});
