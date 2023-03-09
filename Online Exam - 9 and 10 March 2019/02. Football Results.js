function footballResults(input) {
  let index = 0;
  let mach = String(input[index]);
  index++;
  
  let wins = 0;
  let lost = 0;
  let drawn = 0;
  for (let i = 1; i <= 3; i++) {
    let teamA = Number(mach[0]);
    let teamB = Number(mach[2]);
    if (teamA > teamB) {
      wins++;
    } else if (teamA < teamB) {
      lost++;
    } else {
      drawn++;
    }
    mach = String(input[index]);
    index++;
  }
  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${lost} games.`);
  console.log(`Drawn games: ${drawn}`);
}
footballResults(["0:2", "0:1", "3:3"]);
// footballResults(["0:2", "0:1", "3:3"]);
