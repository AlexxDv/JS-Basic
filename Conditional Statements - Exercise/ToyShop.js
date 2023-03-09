function toyshop(input) {
  const puzzel = 2.6;
  const talkingDoll = 3;
  const teddyBear = 4.1;
  const minion = 8.2;
  const truk = 2;

  const holiday = Number(input[0]);
  const puzzelPieces = Number(input[1]);
  const talkingDollPieces = Number(input[2]);
  const teddyBearPieces = Number(input[3]);
  const minionPieces = Number(input[4]);
  const trukPieces = Number(input[5]);
  const alltoys =
    puzzelPieces +
    talkingDollPieces +
    teddyBearPieces +
    minionPieces +
    trukPieces;

  let bill =
    puzzel * puzzelPieces +
    talkingDoll * talkingDollPieces +
    teddyBear * teddyBearPieces +
    minion * minionPieces +
    truk * trukPieces;

  if (alltoys >= 50) {
    bill *= 0.75;
  }

  const accomodation = bill * 0.1;
  const profit = bill - accomodation;
  const totalBill = Math.abs(profit - holiday).toFixed(2)

  if (profit >= holiday) {
      console.log(`Yes! ${totalBill} lv left.`)
  } else {
      console.log(`Not enough money! ${totalBill} lv needed.`)
  }
 
}

toyshop(["40.8", "20", "25", "30", "50", "10"]);
toyshop(["320", "8", "2", "5", "5", "1"]);
