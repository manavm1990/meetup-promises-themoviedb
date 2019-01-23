// Fetch most popular movies
const movieResults = fetch(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6891357a0c99af8e63ba31ebfc80a555xxx"
);
movieResults
  .then(response => {
    if (!response.ok) {
      return Promise.reject(new Error("bad response!"));
    }
    return response.json();
  })

  // PROMISE CHAIN 'prettier' than 'nesting callbacks!'
  .then(movies => movies.results.forEach(movie => console.log(movie.title)))
  .catch(error => console.error(`Error! ${error}`))
  .finally(() => console.log("all done!"));
