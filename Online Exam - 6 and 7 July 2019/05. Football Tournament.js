function footballTour(input) {
  let index = 0;
  let name = input[index];
  index++;
  let playedGames = Number(input[index]);
  index++;
  let wins = 0;
  let loses = 0;
  let equal = 0;
  let result = 0;

  for (i = 0; i < playedGames; i++) {
    result = input[index];
    index++;
    switch (result) {
      case "W":
        wins++;
        break;
      case "L":
        loses++;
        break;
      case "D":
        equal++;
        break;
    }
  }
  if (result === 0) {
    console.log(`${name} hasn't played any games during this season.`);
  } else {
    console.log(
      `${name} has won ${wins * 3 + equal} points during this season.`
    );
    console.log(`Total stats:`);
    console.log(`## W: ${wins}`);
    console.log(`## D: ${equal}`);
    console.log(`## L: ${loses}`);
    console.log(`Win rate: ${((wins / playedGames) * 100).toFixed(2)}%`);
  }
}
// footballTour([
//   "Liverpool",
//   "10",
//   "W",
//   "D",
//   "D",
//   "W",
//   "L",
//   "W",
//   "D",
//   "D",
//   "W",
//   "W",
// ]);
footballTour(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
footballTour(["Chelsea", "0"]);
