const allMovies = {
  movies: [
    {
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 6.625,
      "release_date": "2020-09-29"
    },
    {
      "id": 337401,
      "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      "title": "Mulan",
      "average_rating": 5.2727272727272725,
      "release_date": "2020-09-04"
    },
    {
      "id": 718444,
      "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
      "title": "Rogue",
      "average_rating": 6.571428571428571,
      "release_date": "2020-08-20"
    },
    {
      "id": 539885,
      "poster_path": "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
      "title": "Ava",
      "average_rating": 5.714285714285714,
      "release_date": "2020-07-02"
    },
    {
      "id": 581392,
      "poster_path": "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
      "title": "Peninsula",
      "average_rating": 7.6,
      "release_date": "2020-07-15"
    },
    {
      "id": 726739,
      "poster_path": "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
      "title": "Cats & Dogs 3: Paws Unite",
      "average_rating": 7,
      "release_date": "2020-10-02"
    },
    {
      "id": 627290,
      "poster_path": "https://image.tmdb.org/t/p/original//irkse1FMm9dWemwlxKJ7RINT9Iy.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pGqBDYycGWsMYc57sYv5M9GAQoW.jpg",
      "title": "Antebellum",
      "average_rating": 6.571428571428571,
      "release_date": "2020-09-02"
    },
    {
      "id": 613504,
      "poster_path": "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
      "title": "After We Collided",
      "average_rating": 5.25,
      "release_date": "2020-09-02"
    },
    {
      "id": 659986,
      "poster_path": "https://image.tmdb.org/t/p/original//gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//xUUtcxWC6H48UCrpRwwSPQz69XC.jpg",
      "title": "The Owners",
      "average_rating": 5.285714285714286,
      "release_date": "2020-09-04"
    },
    {
      "id": 632618,
      "poster_path": "https://image.tmdb.org/t/p/original//sDi6wKgECUjDug2gn4uODSqZ3yC.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//cVdYaAQmd5DZNdo0KFJruz7JpUs.jpg",
      "title": "The Crimes That Bind",
      "average_rating": 4.857142857142857,
      "release_date": "2020-08-20"
    },
    {
      "id": 446893,
      "poster_path": "https://image.tmdb.org/t/p/original//7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
      "title": "Trolls World Tour",
      "average_rating": 5.5,
      "release_date": "2020-03-12"
    },
    {
      "id": 508439,
      "poster_path": "https://image.tmdb.org/t/p/original//f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
      "title": "Onward",
      "average_rating": 6.4,
      "release_date": "2020-02-29"
    }
  ]
}

const singleMovie = {
  "movie": { "id": 694919, "title": "Money Plane", "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg", "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg", "release_date": "2020-09-29", "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.", "genres": ["Action"], "budget": 0, "revenue": 0, "runtime": 82, "tagline": "", "average_rating": 7.428571428571429 }
}

export default { allMovies, singleMovie };