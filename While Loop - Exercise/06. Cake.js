function cake(input) {
  let index = 0;
  let width = Number(input[index++]);
  let length = Number(input[index++]);
  let command = input[index++];
  let totalCacePeaces = width * length;
  let sum = 0;

  while (command !== "STOP") {
    let cakeSum = Number(command);
    totalCacePeaces -= cakeSum;
    if (totalCacePeaces <= 0) {
      console.log(
        `No more cake left! You need ${Math.abs(totalCacePeaces)} pieces more.`
      );
      break;
    }
    command = input[index++];
  }
  if (command === "STOP") {
    console.log(`${Math.abs(totalCacePeaces)} pieces are left.`);
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
