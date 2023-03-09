function careOfPuppy(input) {
  let index = 0;
  let foodInKG = Number(input[index++]);
  let foodInGR = foodInKG * 1000;
  let command = input[index++];
  let sumFoodPerDay = 0;

  while (command !== "Adopted") {
    let sum = Number(command);
    sumFoodPerDay += sum;
    foodInGR -= sum;
    command = input[index++];
  }
  if (foodInGR >= 0) {
    console.log(`Food is enough! Leftovers: ${foodInGR} grams.`);
  } else {
    console.log(
      `Food is not enough. You need ${Math.abs(foodInGR)} grams more.`
    );
  }
}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
