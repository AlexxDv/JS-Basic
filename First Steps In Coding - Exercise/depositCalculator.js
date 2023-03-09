function depositCalculator(input) {
  const deposit = Number(input[0]);
  const mounts = Number(input[1]);
  const GDP = Number(input[2]) / 100;
  let name = input[3];
  let suma = deposit + mounts * ((deposit * GDP) / 12);
  let str = `${name} will have $${suma} in his acount after ${mounts} moutns.`;

  console.log(str);
}

depositCalculator(["200 ", "3 ", "5.7 ", "Alex"]);
