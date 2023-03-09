function divisionWithoutRemainder(input) {
  let allNumbers = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i <= allNumbers; i++) {
    let currNum = Number(input[i]);
    if (currNum % 2 === 0) {
      p1++;
    }
    if (currNum % 3 === 0) {
      p2++;
    }
    if (currNum % 4 === 0) {
      p3++;
    }
  }
  console.log(((p1 / allNumbers) * 100).toFixed(2) + "%");
  console.log(((p2 / allNumbers) * 100).toFixed(2) + "%");
  console.log(((p3 / allNumbers) * 100).toFixed(2) + "%");
}
divisionWithoutRemainder([
  "10",
  "680",
  "2",
  "600",
  "200",
  "800",
  "799",
  "199",
  "46",
  "128",
  "65",
]);
// divisionWithoutRemainder(["3", "3", "6", "9"]);
