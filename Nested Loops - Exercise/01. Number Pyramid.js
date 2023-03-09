function numberPyramid(input) {
  let n = Number(input[0]);

  let current = 1;
  let isBigger = false;
  let str = "";

  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      str += current + " ";
      current++;
    }
    console.log(str);
    str = "";
    if (isBigger) {
      break;
    }
  }
}
// numberPyramid(["7"])
numberPyramid(["12"]);
// numberPyramid(["15"])
