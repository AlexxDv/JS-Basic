function sumNumbers(input) {
  let index = 0;
  let mainNum = Number(input[index++]);
  let sum = 0;

  while (sum < mainNum){
    let dataNum = Number(input[index++]);
    sum +=dataNum;
  }
  console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
sumNumbers(["100", "10", "20", "30", "40"]);