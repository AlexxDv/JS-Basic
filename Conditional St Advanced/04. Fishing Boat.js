function fishingBoat(input) {
  const springPrice = 3000;
  const summerAndAutumPrice = 4200;
  const winterPrice = 2600;

  const budget = Number(input[0]);
  const season = input[1];
  const fishermen = Number(input[2]);
  let discount = 0;
  let totalCost = 0;

  switch (season) {
    case "Spring":
      totalCost = springPrice;
      break;
    case "Summer":
    case "Autumn":
      totalCost = summerAndAutumPrice;
      break;
    case "Winter":
      totalCost = winterPrice;
      break;
  }

  if (fishermen <= 6) {
    discount = 0.9;
  } else if (fishermen >= 7 && fishermen <= 11) {
    discount = 0.85;
  } else if (fishermen >= 12) {
    discount = 0.75;
  } else {
    discount = 1;
  }

  let finalCost = discount * totalCost;

  if (fishermen % 2 === 0 && season !== "Autumn") {
    finalCost *= 0.95;
  }

  if (budget >= finalCost) {
    console.log(`Yes! You have ${(budget - finalCost).toFixed(2)} leva left.`);
  } else if (budget < finalCost) {
    console.log(
      `Not enough money! You need ${(finalCost - budget).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);
