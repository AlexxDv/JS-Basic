function invalidNumber(input) {
  const num = Number(input[0]);

  if ((num >= 100 && num <= 200) || num === 0) {
    console.log();
  } else {
    console.log("invalid");
  }
}
invalidNumber(["75"]);
// invalidNumber(["0"]);
// invalidNumber(["220"]);
// invalidNumber(["75"]);
// invalidNumber(["-1"]);
// invalidNumber(["100"]);
// invalidNumber(["200"]);
// invalidNumber(["0"]);
