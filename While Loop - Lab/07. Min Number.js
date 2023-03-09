function minNumber(input) {
  let index = 0;
  let num = input[index++];
  let min = Number.MAX_SAFE_INTEGER

  while (num !== "Stop"){
      let timeNum = Number(num);
      if (timeNum < min){
          min = timeNum;
      }
      num = input[index++];
  }
  console.log(min)
}
minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);
