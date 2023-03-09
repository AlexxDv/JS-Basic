function easterCompetition(input) {
  let index = 0;
  let quantity = Number(input[index]);
  index++;
  
  let maxPoints = 0;
  let chefPoints = 0;
  let topChef;

  for (let i = 0; i < quantity; i++) {
    let name = input[index];
    index++;
    let command = input[index];
    index++;
    while (command !== "Stop") {
      let currPoints = Number(command);
      chefPoints += currPoints;
      command = input[index];
      index++;
    }
    console.log(`${name} has ${chefPoints} points.`);
    if (chefPoints > maxPoints) {
      console.log(`${name} is the new number 1!`);
      maxPoints = chefPoints;
      topChef = name;
    }
    chefPoints = 0;
  }
  console.log(`${topChef} won competition with ${maxPoints} points!`);
}
easterCompetition([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop",
]);
