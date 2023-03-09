function challengeTheWedding(input) {
  let men = Number(input[0]);
  let women = Number(input[1]);
  let tables = Number(input[2]);

  let str = "";
  let counter = 0;
  let isFull = false;

  for (let a = 1; a <= men; a++) {
    for (let b = 1; b <= women; b++) {
      counter++;
      str += `(${a} <-> ${b}) `;
      if (counter == tables) {
        isFull = true;
        break;
      }
    }
    if (isFull) {
      break;
    }
  }
  console.log(str);
}
challengeTheWedding([5, 8, 40]);
