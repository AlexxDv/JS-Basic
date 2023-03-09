function mobileOperator(input) {
  let contractTerms = input[0];
  let contractType = input[1];
  let mobileInternet = input[2];
  let months = Number(input[3]);

  let sum = 0;
  let tax = 0;

  switch (contractType) {
    case "Small":
      if (contractTerms === "one") {
        tax = 9.98;
      } else {
        tax = 8.58;
      }
      break;
    case "Middle":
      if (contractTerms === "one") {
        tax = 18.99;
      } else {
        tax = 17.09;
      }
      break;
    case "Large":
      if (contractTerms === "one") {
        tax = 25.98;
      } else {
        tax = 23.59;
      }
      break;
    case "ExtraLarge":
      if (contractTerms === "one") {
        tax = 35.99;
      } else {
        tax = 31.79;
      }
      break;
  }
  if (mobileInternet === "yes") {
    if (tax <= 10) {
      tax += 5.5;
    } else if (tax <= 30) {
      tax += 4.35;
    } else if (tax > 30) {
      tax += 3.85;
    }
  }
  if (contractTerms === "two") {
    tax *= 0.9625;
  }
  sum = (tax * months).toFixed(2);
  console.log(sum + " lv.");
}
mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
mobileOperator(["two", "ExtraLarge", "yes", "20"]);
mobileOperator(["two", "Small", "yes", "20"]);
