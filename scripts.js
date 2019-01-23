// Fetch most popular movies
const movieResults = fetch(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6891357a0c99af8e63ba31ebfc80a555"
);
movieResults
  .then(response =>
    // TODO: Handle 'bad' responses like '404 by 'throwing' 'new Error'
    response.json()
  )

  // PROMISE CHAIN 'prettier' than 'nesting callbacks!'
  .then(movies => movies.results.forEach(movie => console.log(movie.title)))

  /**
   * ES8 introduced finally()
   * It will execute no matter what!
   * It can be placed anywhere, but usually at end
   */
  .finally(() => console.log("finally!"))
  .catch(error => console.error(`Error! ${error}`))
  .finally(() => console.log("all done!"));
