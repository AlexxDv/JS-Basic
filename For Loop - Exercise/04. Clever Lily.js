function cleverLily(input) {
  let index = 0;
  let age = Number(input[index++]);
//   index++;
  let washingMachinePrice = Number(input[index++]);
//   index++;
  let toysPrice = Number(input[index++]);
//   index++;
  let tempMoney = 10;
  let money = 0;
  let totalToys = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += tempMoney;
      tempMoney += 10;
      money -= 1;
    } else {
      totalToys++;
    }
  }
  money += totalToys * toysPrice;
  let res = Math.abs(money - washingMachinePrice).toFixed(2);
  if (money >= washingMachinePrice) {
    console.log(`Yes! ${res}`);
  } else {
    console.log(`No! ${res}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
