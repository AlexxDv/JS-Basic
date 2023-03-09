function series(input) {
  let index = 0;
  let startBudget = Number(input[index]);
  index++;
  let tvShowNum = Number(input[index]);
  index++;

  for (let i = 0; i < tvShowNum; i++) {
    let tvShowName = input[index];
    index++;
    let tvShowPrice = Number(input[index]);
    index++;

    switch (tvShowName) {
      case "Thrones":
        tvShowPrice *= 0.5;
        break;
      case "Lucifer":
        tvShowPrice *= 0.6;
        break;
      case "Protector":
        tvShowPrice *= 0.7;
        break;
      case "TotalDrama":
        tvShowPrice *= 0.8;
        break;
      case "Area":
        tvShowPrice *= 0.9;
        break;
    }
    startBudget -= tvShowPrice;
  }
  if (startBudget >= 0) {
    console.log(
      `You bought all the series and left with ${startBudget.toFixed(2)} lv.`
    );
  } else {
    console.log(
      `You need ${Math.abs(startBudget).toFixed(2)} lv. more to buy the series!`
    );
  }
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);
