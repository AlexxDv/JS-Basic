function logistics(input) {
  let index = 0;
  let loads = Number(input[index]);
  index++;

  let busPrice = 200;
  let truckPrice = 175;
  let trainPrice = 120;

  let bus = 0;
  let truck = 0;
  let train = 0;
  let total = 0;

  for (let i = 0; i < loads; i++) {
    let cargoTonnage = Number(input[index]);
    index++;
    total += cargoTonnage;
    if (cargoTonnage <= 3) {
      bus += cargoTonnage;
    } else if (cargoTonnage > 3 && cargoTonnage <= 11) {
      truck += cargoTonnage;
    } else {
      train += cargoTonnage;
    }
  }
  let avg = (bus * busPrice + truck * truckPrice + train * trainPrice) / total;
  console.log(avg.toFixed(2));
  console.log(`${((bus / total) * 100).toFixed(2)}%`);
  console.log(`${((truck / total) * 100).toFixed(2)}%`);
  console.log(`${((train / total) * 100).toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);
