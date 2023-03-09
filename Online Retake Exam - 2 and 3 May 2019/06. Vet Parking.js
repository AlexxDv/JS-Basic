function vetParking(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);

  let totalSum = 0;

  for (let i = 1; i <= days; i++) {
    let pricePerHour = 0;
    for (let j = 1; j <= hours; j++) {
      if (i % 2 === 0 && j % 2 !== 0) {
        pricePerHour += 2.5;
      } else if (i % 2 !== 0 && j % 2 === 0) {
        pricePerHour += 1.25;
      } else {
        pricePerHour += 1;
      }
    }
    console.log(`Day: ${i} - ${pricePerHour.toFixed(2)} leva`);
    totalSum += pricePerHour;
  }
  console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
// vetParking(["2", "5"]);
vetParking(["5", "2"]);
