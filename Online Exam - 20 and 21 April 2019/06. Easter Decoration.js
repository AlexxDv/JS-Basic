function easterDecoration(input) {
  let index = 0;
  let ppl = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let avgSum = 0;
  let price = 0;

  for (let i = 0; i < ppl; i++) {
    let counter = 0;
    let sum = 0;
    while (command !== "Finish") {
      counter++;
      switch (command) {
        case "basket":
          price = 1.5;
          break;
        case "wreath":
          price = 3.8;
          break;
        case "chocolate bunny":
          price = 7;
          break;
      }
      sum += price;
      command = input[index];
      index++;
    }
    if (counter % 2 === 0) {
      sum *= 0.8;
    }
    avgSum += sum;
    console.log(`You purchased ${counter} items for ${sum.toFixed(2)} leva.`);
    command = input[index];
    index++;
  }
  console.log(`Average bill per client is: ${(avgSum / ppl).toFixed(2)} leva.`);
}
easterDecoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
easterDecoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
