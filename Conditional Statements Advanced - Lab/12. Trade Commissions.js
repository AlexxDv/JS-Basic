function tradeComm(input) {
  const city = input[0];
  let sales = Number(input[1]);
  let commisionOne = (sales >= 0 && sales <= 500)
  let commisonTwo = (sales > 500 && sales <= 1000)
  let commisionThree = (sales > 1000 && sales <= 10000)
  let commisionFour = (sales > 10000)
  let price = 0;

  if (city === "Sofia") {
    if (commisionOne) {
      price = sales * 0.05;
    } else if (commisonTwo) {
      price = sales * 0.07;
    } else if (commisionThree) {
      price = sales * 0.08;
    } else if (commisionFour) {
      price = sales * 0.12;
    }
  } else if (city === "Varna") {
    if (sales >= 0 && sales <= 500) {
      price = sales * 0.045;
    } else if (commisonTwo) {
      price = sales * 0.075;
    } else if (commisionThree) {
      price = sales * 0.1;
    } else if (commisionFour) {
      price = sales * 0.13;
    }
  } else if (city === "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      price = sales * 0.055;
    } else if (commisonTwo) {
      price = sales * 0.08;
    } else if (commisionThree) {
      price = sales * 0.12;
    } else if (commisionFour) {
      price = sales * 0.145;
    }
  } else {
    price = 0;
  }
  if (price === 0) {
    console.log("error");
  } else {
    console.log(price.toFixed(2));
  }
}
tradeComm(["Sofia", "1500"]);
tradeComm(["Plovdiv", "1000"]);
tradeComm(["Varna", "3874.50"]);
tradeComm(["Kaspichan", "-50"]);
