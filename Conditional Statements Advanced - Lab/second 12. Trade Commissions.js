function tradeComm(input) {
    const city = input[0];
    let sales = Number(input[1]);
    let commisionOne = (sales >= 0 && sales <= 500)
    let commisonTwo = (sales > 500 && sales <= 1000)
    let commisionThree = (sales > 1000 && sales <= 10000)
    let commisionFour = (sales > 1000)
    let price = 0;

    switch (city) {
        case "Sofia": switch(sales) {
            case commisionOne: price *= 0.05; break;
            case commisonTwo: price*= 0.07; break;
            case commisionThree: price *= 0.08; break;
            case commisionFour: price *= 0.12; break;
           
        }
        break;
    //     case "Varna": switch(sales) {
    //         case commisionOne: price *= 0.045; break;
    //         case commisonTwo: price*= 0.075; break;
    //         case commisionThree: price *= 0.1; break;
    //         case commisionFour: price *= 0.13; break;
    //     }
    //     break;
    //     case "Plovdiv": switch(sales) {
    //         case commisionOne: price *= 0.055; break;
    //         case commisonTwo: price*= 0.08; break;
    //         case commisionThree: price *= 0.12; break;
    //         case commisionFour: price *= 0.145; break;
    //     }
    //     break;
    }
    break;

  console.log(price)
    // if (price === 0) {
    //   console.log("error");
    // } else {
    //   console.log(price.toFixed(2));
    // }
  
}
  tradeComm(["Sofia", "1500"]);
//   tradeComm(["Plovdiv", "499.99"]);
//   tradeComm(["Varna", "3874.50"]);
//   tradeComm(["Kaspichan", "-50"]);