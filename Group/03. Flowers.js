function flowers(input) {
  const chrysanthemumsQuantity = Number(input[0]);
  const rosesQuantity = Number(input[1]);
  const tulipsQuantity = Number(input[2]);
  const season = input[3];
  const isItHoliday = input[4];
  let chrysanthemumsPrice = 0;
  let rosesPrice = 0;
  let tulipsPrice = 0;

  switch (season) {
    case "Spring":
    case "Summer":
      chrysanthemumsPrice = 2;
      rosesPrice = 4.1;
      tulipsPrice = 2.5;
      break;
    case "Autumn":
    case "Winter":
      chrysanthemumsPrice = 3.75;
      rosesPrice = 4.5;
      tulipsPrice = 4.15;
      break;
  }
  let totalPrice =
    chrysanthemumsPrice * chrysanthemumsQuantity +
    rosesPrice * rosesQuantity +
    tulipsPrice * tulipsQuantity;

  if (isItHoliday === "Y") {
    totalPrice *= 1.15;
  }

  if (tulipsQuantity > 7 && season === "Spring") {
    totalPrice *= 0.95;
  }
  if (rosesQuantity >= 10 && season === "Winter") {
    totalPrice *= 0.9;
  }
  let totalFlowersQuantity =
    chrysanthemumsQuantity + rosesQuantity + tulipsQuantity;
  if (totalFlowersQuantity > 20) {
    totalPrice *= 0.8;
  }
  let taxForArranging = 2;

  console.log((totalPrice + taxForArranging).toFixed(2));
}

flowers(["10", "10", "10", "Autumn", "N"]);
