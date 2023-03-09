function familyTrip(input) {
  let budget = Number(input[0]);
  let nights = Number(input[1]);
  let nightsPrice = Number(input[2]);
  let percentOfAddCost = Number(input[3]);

  if (nights > 7) {
    nightsPrice *= 0.95;
  }
  let addCost = (budget * percentOfAddCost) / 100;

  let totalCost = nights * nightsPrice + addCost;
  let diff = Math.abs(budget - totalCost).toFixed(2);

  if (budget >= totalCost) {
    console.log(`Ivanovi will be left with ${diff} leva after vacation.`);
  } else {
    console.log(`${diff} leva needed.`);
  }
}
familyTrip(800.5, 8, 100, 2);
