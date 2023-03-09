function cinema(input) {
  let index = 0;
  let capacity = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let ticketPrice = 5;
  let currTax = 0;

  while (command !== "Movie time!") {
    let ppl = Number(command);
    if (capacity - ppl >= 0) {
      capacity -= ppl;
      currTax += ppl * ticketPrice;
      if (ppl % 3 === 0) {
        currTax -= 5;
      }
    } else {
      console.log(`The cinema is full.`);
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Movie time!") {
    console.log(`There are ${capacity} seats left in the cinema.`);
  }
  console.log(`Cinema income - ${currTax} lv.`);
}

cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// cinema(["50", "15", "10", "10", "15", "5"]);
// cinema([
//   "100",
//   "10",
//   "10",
//   "10",
//   "10",
//   "10",
//   "10",
//   "10",
//   "10",
//   "10",
//   "10",
//   "Movie time!",
// ]);
