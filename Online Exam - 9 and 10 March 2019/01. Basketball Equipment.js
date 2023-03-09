function basketballEq(input) {
  let yearTax = Number(input[0]);

  let trainers = yearTax * 0.6;
  let trakingSuit = trainers * 0.8;
  let ball = trakingSuit / 4;
  let acc = ball / 5;

  let sum = yearTax + trainers + trakingSuit + ball + acc;
  console.log(sum.toFixed(2));
}
basketballEq(["320"]);
