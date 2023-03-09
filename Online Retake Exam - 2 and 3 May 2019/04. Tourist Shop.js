function touristShop(input) {
  let budget = Number(input[0]);

  let index = 1;
  let nameOfTheProduct = input[index];
  index++;
  let priceOfTheProduct = Number(input[index]);
  index++;

  let currProdutCounter = 0;
  let currSum = 0;

  while (nameOfTheProduct !== "Stop") {
    currProdutCounter++;
    if (currProdutCounter % 3 === 0) {
      priceOfTheProduct *= 0.5;
    }

    currSum += priceOfTheProduct;
    if (currSum > budget) {
      console.log("You don't have enough money!");
      console.log(`You need ${(currSum - budget).toFixed(2)} leva!`);
      break;
    }
    nameOfTheProduct = input[index];
    index++;
    priceOfTheProduct = Number(input[index]);
    index++;
  }
  if (currSum <= budget) {
    console.log(
      `You bought ${currProdutCounter} products for ${currSum.toFixed(2)} leva.`
    );
  }
}
// touristShop([
//   "153.20",
//   "Backpack",
//   "25.20",
//   "Shoes",
//   "54",
//   "Sunglasses",
//   "30",
//   "Stop",
// ]);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
