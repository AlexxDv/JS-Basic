function cristmasTurnament(input) {
  const numberOfDays = input[0];

  let itemIndex = 1;
  let dailyCharity = 0;
  let dailyBonus = 0;

  let totalCharity = 0;
  let totalBonus = 0;

  for (let i = 1; i <= numberOfDays; i++) {
    while (input[itemIndex] != "Finish") {
      if (input[itemIndex] === "win") {
        dailyCharity += 20;
        dailyBonus++;
      }
      if (input[itemIndex] === "lose") {
        dailyBonus--;
      }

      itemIndex++;
    }

    if (dailyBonus > 0) {
      dailyCharity = dailyCharity * 1.1;
      totalBonus++;
    } else {
      totalBonus--;
    }

    totalCharity = totalCharity + dailyCharity;

    itemIndex++;
    dailyCharity = 0;
    dailyBonus = 0;
  }

  if (totalBonus > 0) {
    totalCharity = totalCharity * 1.2;
    console.log(`You won the tournament! Total raised money: ${totalCharity}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${totalCharity}`);
  }
}

cristmasTurnament([
  "2",
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish",
]);

cristmasTurnament([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
