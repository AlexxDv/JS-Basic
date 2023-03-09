function substitute(input) {
  let k = Number(input[0]);
  let l = Number(input[1]);
  let m = Number(input[2]);
  let n = Number(input[3]);
  let counter = 0;
  let moreThenSix = false;

  for (let a = k; a <= 8; a++) {
    for (let b = 9; b >= l; b--) {
      for (let c = m; c <= 8; c++) {
        for (let d = 9; d >= n; d--) {
          if (a % 2 == 0 && c % 2 == 0 && b % 2 != 0 && d % 2 != 0) {
            if ("" + a + b === "" + c + d) {
              console.log(`Cannot change the same player.`);
            } else {
              console.log(`${a}${b} - ${c}${d}`);
              counter++;
              if (counter >= 6) {
                moreThenSix = true;
                break;
              }
            }
          }
          if (moreThenSix) {
            break;
          }
        }
      }
      if (moreThenSix) {
        break;
      }
    }
    if (moreThenSix) {
      break;
    }
  }
}
// substitute(["7", "6", "8", "5"]);
substitute(["6", "6", "5", "6"]);
