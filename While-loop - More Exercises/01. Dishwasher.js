function dishwasher(input) {
  let index = 0;

  let bottles = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let washingLiquid = bottles * 750;
  
  let counter = 0;
  let dishes = 0;
  let pots = 0;

  while (command !== "End") {
    counter++;
    let quantity = Number(command);
    let currWash = 0;
    if (counter % 3 === 0) {
      currWash = quantity * 15;
      pots += quantity;
    } else {
      currWash = quantity * 5;
      dishes += quantity;
    }
    if (washingLiquid - currWash < 0) {
      console.log(
        `Not enough detergent, ${currWash - washingLiquid} ml. more necessary!`
      );
      break;
    } else {
      washingLiquid -= currWash;
    }
    command = input[index];
    index++;
  }
  if (command === "End") {
    console.log(`Detergent was enough!`);
    console.log(`${dishes} dishes and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${washingLiquid} ml.`);
  }
}
// dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
