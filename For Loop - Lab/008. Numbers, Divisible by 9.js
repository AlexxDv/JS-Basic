function numbersDivByNine(input) {
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);
  let sum = 0;
  let res = "";

  for (i = num1; i < num2; i++) {
    if (i % 9 === 0) {
      sum += i;
      res += `${i}\n`;
    }
  }
  console.log("The sum: " + sum);
  console.log(res);
}

numbersDivByNine(["100", "200"]);
