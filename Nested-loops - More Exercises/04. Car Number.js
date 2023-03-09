function carNumber(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let str = "";

  for (let a = startNum; a <= endNum; a++) {
    for (let b = startNum; b <= endNum; b++) {
      for (let c = startNum; c <= endNum; c++) {
        for (let d = startNum; d <= endNum; d++)
          if ((a % 2 == 0 && d % 2 != 0) || (a % 2 != 0 && d % 2 == 0)) {
            if (a > d) {
              if ((b + c) % 2 == 0) {
                str += `${a}${b}${c}${d}` + " ";
              }
            }
          }
      }
    }
  }
  console.log(str);
}
carNumber([2, 3]);
