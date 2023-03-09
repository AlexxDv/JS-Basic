function oscars(input) {
    
  let index = 0;
  let name = input[index];
  index++;
  let pointFromAcademy = Number(input[index]);
  index++;
  let juryNum = Number(input[index]);
  index++;

  for (let i = 0; i < juryNum; i++) {
    let juryName = input[index];
    index++;
    let currPoints = Number(input[index]);
    index++;

    let calculatedPoints = (juryName.length * currPoints) / 2;
    pointFromAcademy += calculatedPoints;
    if (pointFromAcademy >= 1250.5) {
      console.log(`Congratulations, ${name} got a nominee for leading role with ${pointFromAcademy.toFixed(1)}!`);
      break;
    }
  }
  if (pointFromAcademy < 1250.5) {
    console.log(`Sorry, ${name} you need ${(1250.5 - pointFromAcademy).toFixed(1)} more!`);
  }
}
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
