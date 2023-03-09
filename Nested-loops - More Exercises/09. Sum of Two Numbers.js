function sumOfTwo(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magic = Number(input[2]);

  let counter = 0;
  let isMagic = false;

  for (let a = start; a <= end; a++) {
    for (let b = start; b <= end; b++) {
      counter++;
      if (a + b == magic) {
        console.log(`Combination N:${counter} (${a} + ${b} = ${magic})`);
        isMagic = true;
      }
    }
    if (isMagic) {
      break;
    }
  }
  if (isMagic != true) {
    console.log(`${counter} combinations - neither equals ${magic}`);
  }
}

sumOfTwo([88, 888, 1]);
