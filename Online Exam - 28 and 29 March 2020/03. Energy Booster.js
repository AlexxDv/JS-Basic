function energyBoosters(input) {
  let index = 0;
  let nameOfTheFruit = input[index++];
  let setType = input[index++];
  let quantityOfSets = Number(input[index++]);
  let small = 2 * quantityOfSets;
  let big = 5 * quantityOfSets;
  let sum = 0;

  switch (setType) {
    case "small":
      switch (nameOfTheFruit) {
        case "Watermelon":
          sum = 56 * small;
          break;
        case "Mango":
          sum = 36.66 * small;
          break;
        case "Pineapple":
          sum = 42.1 * small;
          break;
        case "Raspberry":
          sum = 20 * small;
          break;
      }
      break;
    case "big":
      switch (nameOfTheFruit) {
        case "Watermelon":
          sum = 28.7 * big;
          break;
        case "Mango":
          sum = 19.6 * big;
          break;
        case "Pineapple":
          sum = 24.8 * big;
          break;
        case "Raspberry":
          sum = 15.2 * big;
          break;
      }
      break;
  }
  if (sum >= 400 && sum <= 1000) {
    sum *= 0.85;
  } else if (sum > 1000) {
    sum *= 0.5;
  }
  console.log(`${sum.toFixed(2)} lv.`);
}
energyBoosters(["Watermelon", "big", "4"]);
energyBoosters(["Pineapple", "small", "1"]);
energyBoosters(["Raspberry", "small", "50"]);
energyBoosters(["Mango", "big", "8"]);
