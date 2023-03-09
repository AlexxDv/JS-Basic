function movieDay(input) {
  let timeForShots = Number(input[0]);
  let sceneNum = Number(input[1]);
  let timePerScene = Number(input[2]);

  let terrain = timeForShots * 0.15;
  let timeForAll = sceneNum * timePerScene + terrain;
  let diff = Math.abs(timeForAll - timeForShots);

  if (timeForAll <= timeForShots) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`
    );
  } else {
    console.log(`Time is up! To complete the movie you need ${diff} minutes.`);
  }
}
movieDay(["120", "10", "11"]);
movieDay(["60", "15", "3"]);
