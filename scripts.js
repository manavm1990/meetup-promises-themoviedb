/**
 * Fetch most popular movies AND movies currently in theatres AND most popular movies in 2009.
 * Do so IN PARALLEL.
 */
const movieResults = Promise.all([
  fetch(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6891357a0c99af8e63ba31ebfc80a555"
  ).then(response => {
    // TODO: Create helper fxn. to avoid repetitive code!
    if (!response.ok) {
      return Promise.reject(new Error("bad response!"));
    }
    return response.json();
  }),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-12-22&primary_release_date.lte=2019-01-22&api_key=6891357a0c99af8e63ba31ebfc80a555"
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error("bad response!"));
    }
    return response.json();
  }),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?primary_release_year=2009&sort_by=vote_average.desc&api_key=6891357a0c99af8e63ba31ebfc80a555"
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error("bad response!"));
    }
    return response.json();
  })
]);

movieResults
  .then(movieGroups =>
    movieGroups.forEach(movieGroup =>
      movieGroup.results.forEach(movie => console.log(movie.title))
    )
  )
  .catch(error => console.error(`Error!!! ${error}`))
  .finally(() => console.log("all done!"));
