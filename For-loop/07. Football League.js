function footballLeague(input) {
  let index = 0;
  let stadium = Number(input[index]);
  index++;
  let fansNum = Number(input[index]);
  index++;

  let fA = 0;
  let fB = 0;
  let fV = 0;
  let fG = 0;
  let avg = (fansNum / stadium) * 100;
  for (let i = 0; i < fansNum; i++) {
    let fansSector = input[index];
    index++;
    if (fansSector == "A") {
      fA++;
    } else if (fansSector == "B") {
      fB++;
    } else if (fansSector == "V") {
      fV++;
    } else {
      fG++;
    }
  }
  console.log(`${((fA / fansNum) * 100).toFixed(2)}%`);
  console.log(`${((fB / fansNum) * 100).toFixed(2)}%`);
  console.log(`${((fV / fansNum) * 100).toFixed(2)}%`);
  console.log(`${((fG / fansNum) * 100).toFixed(2)}%`);
  console.log(`${avg.toFixed(2)}%`);
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
