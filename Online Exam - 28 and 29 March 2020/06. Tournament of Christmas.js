function tournament(input) {
  let index = 0;
  let daysOfTournament = Number(input[index++]);
  let sportOrCommand = input[index++];
  let moneyForWin = 20;
  let sum = 0;
  let winDays = 0;
  let lostDays = 0;
  let totalsum = 0;

  for (let i = 0; i < daysOfTournament; i++) { 
    let wins = 0;
    let loses = 0;
    while (sportOrCommand !== "Finish") {
      let outcome = input[index++];
      if (outcome === "win") {
        wins++;
      } else {
        loses++;
      }
      sportOrCommand = input[index++];
    }
    sum = moneyForWin * wins;
    if (wins > loses) {
      sum *= 1.1;
      winDays++;
    } else if (wins < loses) {
      lostDays++;
    }
    totalsum += sum
    sportOrCommand = input[index++];
  }
  if (winDays > lostDays) {
    totalsum *= 1.2;
  }
  if (winDays > lostDays) {
    console.log(
      `You won the tournament! Total raised money: ${totalsum.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalsum.toFixed(2)}`
    );
  }
}
tournament([
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
tournament([
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
