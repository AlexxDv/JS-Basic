function gameOfIntervals(input) {
  let index = 0;
  let totalNum = Number(input[index]);
  index++;

  let sum = 0;
  let points = 0;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  let p6 = 0;

  for (let i = 0; i < totalNum; i++) {
    let currNum = Number(input[index]);
    index++;

    if (currNum >= 0 && currNum <= 9) {
      p1++;
      points += currNum * 0.2;
    } else if (currNum >= 10 && currNum <= 19) {
      p2++;
      points += currNum * 0.3;
    } else if (currNum >= 20 && currNum <= 29) {
      p3++;
      points += currNum * 0.4;
    } else if (currNum >= 30 && currNum <= 39) {
      p4++;
      points += 50;
    } else if (currNum >= 40 && currNum <= 50) {
      p5++;
      points += 100;
    } else {
      p6++;
      points = sum / 2;
    }
    sum = points;
  }
  console.log(sum.toFixed(2));
  console.log(`From 0 to 9: ${((p1 / totalNum) * 100).toFixed(2)}%`);
  console.log(`From 10 to 19: ${((p2 / totalNum) * 100).toFixed(2)}%`);
  console.log(`From 20 to 29: ${((p3 / totalNum) * 100).toFixed(2)}%`);
  console.log(`From 30 to 39: ${((p4 / totalNum) * 100).toFixed(2)}%`);
  console.log(`From 40 to 50: ${((p5 / totalNum) * 100).toFixed(2)}%`);
  console.log(`Invalid numbers: ${((p6 / totalNum) * 100).toFixed(2)}%`);
}
gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);
