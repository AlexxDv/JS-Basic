function trekkingMania(input) {
    let index = 0;
    let numberOfGroups = Number(input[index++]);
    let sum = 0;
    let musala = 0;
    let monblan = 0;
    let kilima = 0;
    let k2 = 0;
    let everest = 0;
  
    for (let i = 1; i <= numberOfGroups; i++) {
      sum += Number(input[i]);
      let num = Number(input[index++]);
      if (num <= 5) {
        musala += num;
      } else if (num >= 6 && num <= 12) {
        monblan += num;
      } else if (num >= 13 && num <= 25) {
        kilima += num;
      } else if (num >= 26 && num <= 40) {
        k2 += num;
      } else if (num >= 41) {
        everest += num;
      }
    }
    let musalaCl = (musala / sum) * 100;
    let monblanCl = (monblan / sum) * 100;
    let kilimaCl = (kilima / sum) * 100;
    let k2Cl = (k2 / sum) * 100;
    let everestCl = (everest / sum) * 100;
  
    console.log(`${musalaCl.toFixed(2)}%`);
    console.log(`${monblanCl.toFixed(2)}%`);
    console.log(`${kilimaCl.toFixed(2)}%`);
    console.log(`${k2Cl.toFixed(2)}%`);
    console.log(`${everestCl.toFixed(2)}%`);
  }