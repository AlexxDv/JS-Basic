function movieStars(input) {
  let index = 0;
  let totalBudget = Number(input[index]);
  index++;
  let name = input[index];
  index++;
  let salary = 0;

  while (name !== "ACTION") {
    if (name.length > 15) {
      salary = totalBudget * 0.2;
    } else {
      salary = Number(input[index]);
      index++;
    }
    if (totalBudget - salary >= 0) {
      totalBudget -= salary;
    } else {
      console.log(
        `We need ${(salary - totalBudget).toFixed(2)} leva for our actors.`
      );
      break;
    }
    name = input[index];
    index++;
  }
  if (name === "ACTION") {
    console.log(`We are left with ${totalBudget.toFixed(2)} leva.`);
  }
}
// movieStars([
//   "90000",
//   "Christian Bale",
//   "70000.50",
//   "Leonard DiCaprio",
//   "Kevin Spacey",
//   "24000.99",
// ]);
movieStars([
  "170000",
  "Ben Affleck",
  "40000.50",
  "Zahari Baharov",
  "80000",
  "Tom Hanks",
  "2000.99",
  "ACTION",
]);
