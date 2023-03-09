function catWalking(input) {
  let index = 0;
  let minutesForWalk = Number(input[index++]);
  let timesForWalk = Number(input[index++]);
  let catCalories = Number(input[index++]);
  let catCaroiiesNeeded = catCalories * 0.5;
  let caloriesSpendPerMinute = 5;

  let totalWalk = minutesForWalk * timesForWalk;
  let burnedCalories = totalWalk * caloriesSpendPerMinute;

  if (burnedCalories >= catCaroiiesNeeded) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`
    );
  }
}
catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
