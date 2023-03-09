function movieRatings(input) {
  let index = 0;
  let numberOfMovies = Number(input[index]); // index = 0 => 5
  index++;

  let highestRatingMovie = Number.MIN_SAFE_INTEGER;
  let lowestRatingMovie = Number.MAX_SAFE_INTEGER;
  let highestTitleMovie = "";
  let lowestTitleMovie = "";
  let avgRatingOfTheMovie = 0;

  for (let i = 0; i < numberOfMovies; i++) {
    let nameOfTheMovie = input[index]; // index = 1 => A Star is Born
    let movieTitleNow = nameOfTheMovie;
    index++;
    let ratingOfTheMovie = Number(input[index]); // index = 2 => 7.8
    let movieRatingsNow = ratingOfTheMovie;
    avgRatingOfTheMovie += ratingOfTheMovie;
    index++;
    if (movieRatingsNow > highestRatingMovie) {
      highestRatingMovie = movieRatingsNow;
      highestTitleMovie = movieTitleNow;
    } else if (movieRatingsNow < lowestRatingMovie) {
      lowestRatingMovie = movieRatingsNow;
      lowestTitleMovie = movieTitleNow;
    }
  }
  let avg = avgRatingOfTheMovie / numberOfMovies;
  console.log(`${highestTitleMovie} is with highest rating: ${highestRatingMovie.toFixed(1)}`);
  console.log(`${lowestTitleMovie} is with lowest rating: ${lowestRatingMovie.toFixed(1)}`);
  console.log(`Average rating: ${avg.toFixed(1)}`);
}
// movieRatings([
//   "5",
//   "A Star is Born",
//   "7.8",
//   "Creed 2",
//   "7.3",
//   "Mary Poppins",
//   "7.2",
//   "Vice",
//   "7.2",
//   "Captain Marvel",
//   "7.1",
// ]);
movieRatings([
  "3",
  "Interstellar",
  "8.5",
  "Dangal",
  "8.3",
  "Green Book",
  "8.2",
]);
