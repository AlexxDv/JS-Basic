function gameShop(input) {
  let index = 0;
  let numOfGames = Number(input[index]);
  index++;

  let hearthstone = 0;
  let fornite = 0;
  let overwatch = 0;
  let others = 0;

  for (let i = 0; i < numOfGames; i++) {
    let game = input[index];
    index++;
    switch (game) {
        case "Hearthstone": hearthstone++; break;
        case "Fornite": fornite++; break;
        case "Overwatch": overwatch++; break;
        default: others++; break;
    }
  }
  console.log(`Hearthstone - ${(hearthstone / numOfGames * 100).toFixed(2)}%`)
  console.log(`Fornite - ${(fornite / numOfGames * 100).toFixed(2)}%`)
  console.log(`Overwatch - ${(overwatch / numOfGames * 100).toFixed(2)}%`)
  console.log(`Others - ${(others / numOfGames * 100).toFixed(2)}%`)
}
gameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
gameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
