function deeerOfSanta(input) {
  let absentDays = Number(input[0]);
  let leftFoodInKg = Number(input[1]);
  let firstAnimalFoodInKg = Number(input[2]);
  let secondAnimalFoodInKg = Number(input[3]);
  let thirdAnimalFoodInKg = Number(input[4]);

  let allFoodNeeded =
    absentDays * firstAnimalFoodInKg +
    absentDays * secondAnimalFoodInKg +
    absentDays * thirdAnimalFoodInKg;

  let diff = Math.abs(allFoodNeeded - leftFoodInKg);
  if (allFoodNeeded <= leftFoodInKg) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}

deeerOfSanta(["2", "10", "1", "1", "2"]);
deeerOfSanta(["5", "10", "2.1", "0.8", "11"]);
