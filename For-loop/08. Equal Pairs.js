function equalPairs(input) {
  let index = 0;
  let totalNum = Number(input[index]);
  index++;
  let currSum = 0;
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < totalNum; i++) {
    let firsNum = Number(input[index]);
    index++;
    let secondNum = Number(input[index]);
    index++;
    currSum = firsNum + secondNum;
    if (i == 0) {
      minSum = maxSum = currSum;
    }
    if (minSum != currSum && i > 0) {
      if (currSum < minSum) {
        minSum = currSum;
      } else if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }

  if (minSum == maxSum) {
    console.log(`Yes, value=${currSum}`);
  } else {
    console.log(`No, maxdiff=${Math.abs(minSum - maxSum)}`);
  }
}
equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
