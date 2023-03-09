function shopping(input) {
  const petarBudget = Number(input[0]);
  const gpu = Number(input[1]);
  const cpu = Number(input[2]);
  const ram = Number(input[3]);
  const gpuPrice = 250;
  const gpuTotalPrice = gpu * gpuPrice;
  const cpuPrice = gpuTotalPrice * 0.35;
  const ramPrice = gpuTotalPrice * 0.1;

  let totalBill = gpuTotalPrice + cpuPrice * cpu + ramPrice * ram;

  if (gpu > cpu) {
    totalBill *= 0.85;
  }
  let buget = Math.abs(petarBudget - totalBill).toFixed(2);
  if (petarBudget >= totalBill) {
    console.log(`You have ${buget} leva left!`);
  } else {
    console.log(`Not enough money! You need ${buget} leva more!`);
  }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
