function moving(input) {
  let index = 0;
  let width = Number(input[index++]);
  let length = Number(input[index++]);
  let height = Number(input[index++]);
  let command = input[index++];
  let cubicMetersTotal = width * length * height;

  while (command !== "Done") {
    let currentCubicSum = Number(command);
    cubicMetersTotal -= currentCubicSum;
    if (cubicMetersTotal < 0) {
      console.log(
        `No more free space! You need ${Math.abs(
          cubicMetersTotal
        )} Cubic meters more.`
      );
      break;
    }
    command = input[index++];
  }

  if (command === "Done") {
    console.log(`${Math.abs(cubicMetersTotal)} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
// moving(["10", "1", "2", "4", "6", "Done"]);
