function suitcasesLoad(input) {
    let capacityOfThePlane = Number(input.shift());
    let command = input.shift();
    let newCapacity = 0;
    let suitcases = 0;
    let numberSuitcases = 0;
  
    while (command !== "End") {
      let curentSuitcases = Number(command);
      suitcases++;
  
      if (suitcases % 3 === 0) {
        curentSuitcases *= 1.1;
      }
      newCapacity += curentSuitcases;
      if (newCapacity > capacityOfThePlane) {
        break;
      }
  
      numberSuitcases++;
      command = input.shift();
    }
    if (command === "End") {
      console.log(`Congratulations! All suitcases are loaded!`);
      console.log(`Statistic: ${numberSuitcases} suitcases loaded.`);
    } else {
      console.log("No more space!");
      console.log(`Statistic: ${numberSuitcases} suitcases loaded.`);
    }
  }
  suitcasesLoad(["550", "100", "252", "72", "End"]);
  suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
  suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
  