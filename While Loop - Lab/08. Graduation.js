function graduation(input) {
  let index = 0;
  let name = input[index++];
  let sum = 0;
  let excluded = 0;
  let grades = 1;
  let isExpeled = false;

  while (grades <= 12) {
    let score = Number(input[index++]);
    if (score < 4.0) {
      excluded++;
      if (excluded >= 2) {
        isExpeled = true;
        console.log(`${name} has been excluded at ${grades} grade`);
        break;
      }
      continue;
    }
    sum += score;
    grades++;
  }

  let avr = (sum / 12).toFixed(2);
  if (!isExpeled) {
    console.log(`${name} graduated. Average grade: ${avr}`);
  }
}
graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
