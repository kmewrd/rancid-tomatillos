# Rancid Tomatillos

**A front end application built by [George Lemmon](https://github.com/GALemmon) and [Kim Ward](https://github.com/kmewrd).**

Rancid Tomatillos is a movie rating app built during Mod 3 of Turing School of Software & Design. This project focused on the React.js framework, end-to-end testing with Cypress, and using React Router to dynamically render components based on the URL path. The full project specs can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html).

## Goals

- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

<img width="1440" alt="Homepage View of Rancid Tomatillos" src="https://user-images.githubusercontent.com/79027364/161985539-2c6ad6da-bab1-4672-8ef5-db2564daeb6f.png">

## How to Run

1. Clone the repo down to your machine
2. Open the root directory and run `npm i` to install dependencies
3. Run `npm start` in the terminal to open the webpage

---

## Features

When you visit the homepage, there is a grid of movie posters with their movie title and year released. This list is ordered alphabetically from A to Z. Each poster is clickable and directs you to the detailed view of that movie with additional details (genre, rating, runtime, and description).

**Sorting & Filtering**

In the header, there are two dropdown menus that control the order in which posters are displayed. There are four sort option and four filter options:
- Alphabetically (A to Z)
- Alphabetically (Z to A)
- By Rating Ascending
- By Rating Descending
- Ratings above 5
- Ratings above 6
- Ratings above 7
- Show all ratings

Selecting an option from either dropdown menu immediately renders the new sorted/filtered view. Sorting and filtering options can be combined. To return to the original settings, click the Reset button alongside the menu options.

![Rancid Tomatillos Demo](https://user-images.githubusercontent.com/79027364/161874605-45442411-2c3c-4c7b-9234-3ef0174ea7e6.gif)

#### Accessibility & Responsive Layout

This application was tested with Lighthouse and the WAVE Chrome extension in order to address the needs of all users.

![Rancid-Tomatillos-Mobile](https://user-images.githubusercontent.com/79027364/161875414-82cbe288-ef80-4562-8c80-8742eff389b0.gif)

---

### Technologies Used
- React.js
- React Router
- CSS
- HTML
- Cypress
- Fetch API
- NPM
- Visual Studio Code

### Future Additions & Improvements
- Add a login feature so users can leave ratings on movies.
- Deploy site to Heroku.

#### Design Inspiration
For the color palette, we were inspired by Dribbble creator ADEN's [Cinema Dashboard Design](https://dribbble.com/shots/15401391-Cinema-Dashboard-Design).