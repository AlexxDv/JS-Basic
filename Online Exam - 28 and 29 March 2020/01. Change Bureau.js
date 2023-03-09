function changeBureau(input) {
  let btcToBGN = 1168;
  let chineseYuanToUSD = 0.15;
  let usdToBGN = 1.76;
  let euroToBGN = 1.95;
  let index = 0;
  const btc = Number(input[index++]);
  const chineseYuan = Number(input[index++]);
  const commission = Number(input[index++]);

  let commissionPercent = (100 - commission) / 100;
  let btcTotalEuro = (btc * btcToBGN) / euroToBGN;
  let chineseYuanEuro = (chineseYuan * chineseYuanToUSD * usdToBGN) / euroToBGN;
  let totalEuro = (btcTotalEuro + chineseYuanEuro) * commissionPercent;

  console.log(totalEuro.toFixed(2));
}
changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);
