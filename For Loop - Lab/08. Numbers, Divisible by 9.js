function numbersDivByNine(input) {
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);
  let sum = 0;

  for (i = num1; i < num2; i++) {
    if (i % 9 === 0) {
      sum += Number(i);
    }
  }
  console.log("The sum: " +sum);

  for (i = num1; i < num2; i++) {
    if (i % 9 === 0) {
      console.log(i);
    }
  }
}

numbersDivByNine(["100", "200"]);
