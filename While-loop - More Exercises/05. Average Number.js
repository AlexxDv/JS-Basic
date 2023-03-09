function avgNumber(input) {
  let index = 0;
  let numTotal = Number(input[index]);
  index++;
  let sum = 0;

  for (let i = 0; i < numTotal; i++) {
    sum += Number(input[index]);
    index++;
  }
  console.log((sum / numTotal).toFixed(2));
}
avgNumber(["4", "3", "2", "4", "2"]);
