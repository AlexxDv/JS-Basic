function fintessCard(input) {
  let index = 0;

  let startMoney = Number(input[index++]);
  let gender = input[index++];
  let age = Number(input[index++]);
  let sport = input[index++];
  let tax = 0;

  switch (gender) {
      case "m": 
      switch (sport) {
          case "Gym": tax = 42; break;
          case "Boxing": tax = 41; break;
          case "Yoga": tax = 45; break;
          case "Zumba": tax = 34; break;
          case "Dances": tax = 51; break;
          case "Pilates": tax = 39; break;
      } break;
      case "f":
          switch(sport) {
            case "Gym": tax = 35; break;
            case "Boxing": tax = 37; break;
            case "Yoga": tax = 42; break;
            case "Zumba": tax = 31; break;
            case "Dances": tax = 53; break;
            case "Pilates": tax = 37; break;
        } break;
  }
  if (age <= 19){
      tax *= 0.8;
  }
  let diff = Math.abs(startMoney - tax).toFixed(2);
  if (tax <= startMoney){
      console.log(`You purchased a 1 month pass for ${sport}.`)
  } else {
      console.log(`You don't have enough money! You need $${diff} more.`)
  }
}
fintessCard(["50",
"f",
"0",
"Yoga"])

