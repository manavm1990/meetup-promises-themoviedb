// Fetch most popular movies
const movieResults = fetch(
  "https://api.themoviejjdb.org/3/discover/movie?sort_by=popularity.desc&api_key=6891357a0c99af8e63ba31ebfc80a555"
);
movieResults
  .then(
    // ONLY 1 CAN EVER BE CALLED!
    response => response.json(),
    error => console.error(`Error! ${error}`)
  )

  // PROMISE CHAIN 'prettier' than 'nesting callbacks!'
  .then(movies => movies.results.forEach(movie => console.log(movie.title)));
