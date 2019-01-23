// Fetch most popular movies
const movieResults = fetch(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6891357a0c99af8e63ba31ebfc80a555"
);
movieResults.then(response => {
  response
    .json()
    .then(movies => movies.results.forEach(movie => console.log(movie.title)));
});
