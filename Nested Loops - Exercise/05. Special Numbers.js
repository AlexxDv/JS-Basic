function specialNumbers(input) {
  let n = Number(input[0]);
  // let start = "1111";
  // let end = "9999";

  // let startA = Number(start[0]);
  // let startB = Number(start[1]);
  // let startC = Number(start[2]);
  // let startD = Number(start[3]);

  // let endA = Number(end[0]);
  // let endB = Number(end[1]);
  // let endC = Number(end[2]);
  // let endD = Number(end[3]);
  let str = "";

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          if (n % a === 0 && n % b === 0 && n % c === 0 && n % d === 0) {
            str += `${a}${b}${c}${d} `;
          }
        }
      }
    }
  }
  console.log(str);
}
specialNumbers(["3"]);
