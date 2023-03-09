function maxNumber(input) {
  let index = 0;
  let num = input[index++];

  let max = Number.MIN_SAFE_INTEGER;

  while (num !== "Stop") {
    let timeNum = Number(num);
    if (timeNum > max) {
      max = timeNum;
    }
    num = input[index++];
  }
  console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "-20", "-30", "Stop"]);
