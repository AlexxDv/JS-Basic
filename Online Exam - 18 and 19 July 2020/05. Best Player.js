function bestPlaye(input) {
  let index = 0;
  let playerName = input[index++];
  let playerGoal = Number(input[index++]);
  let bestPlayerName = "";
  let bestPlayerScore = 0;

  while (playerName !== "END") {
    if (playerGoal >= 10) {
      bestPlayerName = playerName;
      bestPlayerScore = playerGoal;
      console.log(`${bestPlayerName} is the best player!`);
      console.log(
        `He has scored ${bestPlayerScore} goals and made a hat-trick !!!`
      );
      break;
    }
    if (playerGoal > bestPlayerScore) {
      bestPlayerScore = playerGoal;
      bestPlayerName = playerName;
    }
    playerName = input[index++];
    playerGoal = Number(input[index++]);
  }
  if (bestPlayerScore >= 3 && bestPlayerScore < 10) {
    console.log(`${bestPlayerName} is the best player!`);
    console.log(
      `He has scored ${bestPlayerScore} goals and made a hat-trick !!!`
    );
  } else if (bestPlayerScore < 3) {
    console.log(`${bestPlayerName} is the best player!`);
    console.log(`He has scored ${bestPlayerScore} goals.`);
  }
}
bestPlaye(["Neymar", "1", "Ronaldo", "1", "Messi", "2", "END"]);
// bestPlaye(["Silva", "5", "Harry Kane", "10"]);
// bestPlaye(["Petrov", "2", "Drogba", "11"]);
