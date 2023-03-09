function carToGo(input) {
  let startBudget = Number(input[0]);
  let season = input[1];

  let carType;
  let classOfTheCar;
  let budget = 0;

  if (startBudget <= 100) {
    classOfTheCar = "Economy class";
    if (season === "Summer") {
      carType = "Cabrio";
      budget = 0.35;
    } else if (season === "Winter") {
      carType = "Jeep";
      budget = 0.65;
    }
  } else if (startBudget > 100 && startBudget <= 500) {
    classOfTheCar = "Compact class";
    if (season === "Summer") {
      carType = "Cabrio";
      budget = 0.45;
    } else if (season === "Winter") {
      carType = "Jeep";
      budget = 0.8;
    }
  } else {
    classOfTheCar = "Luxury class";
    carType = "Jeep";
    budget = 0.9;
  }
  let price = (startBudget * budget).toFixed(2);
  console.log(classOfTheCar);
  console.log(`${carType} - ${price}`);
}
carToGo(["1010", "Winter"]);