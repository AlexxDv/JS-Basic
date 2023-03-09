function catDiet(input) {
  let fatCal = 9;
  let proteinCal = 4;
  let carbCal = 4;

  let fatProcent = Number(input[0]);
  let proteinProcent = Number(input[1]);
  let carbProcent = Number(input[2]);
  let allCalories = Number(input[3]);
  let waterProcent = Number(input[4]);

  let fats = ((allCalories * (fatProcent / 100)) / 9);
  let protein = ((allCalories * (proteinProcent / 100)) / 4)
  let carb = ((allCalories * (carbProcent / 100)) / 4)

  let total =  fats + protein + carb
  let cal = allCalories / total

  let water = ((100 - waterProcent)/100)
  let end = cal * water

  console.log(end.toFixed(4));
}
catDiet(["60", "25", "15", "2500", "60"]);
catDiet(["40", "40", "20", "3000", "40"]);
catDiet(["20", "60", "20", "1800", "50"]);
