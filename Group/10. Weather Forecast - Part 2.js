function weatherForecast(input) {
  let a = Number(input[0]);

  if ((a >= 26.0 && a <= 35.0)) {
    console.log("Hot");
  } else if ((a >= 20.1 && a <= 25.9)) {
    console.log("Warm");
  } else if ((a >= 15.0 && a <= 20.0)) {
    console.log("Mild");
  } else if ((a >= 12.0 && a <= 14.9)) {
    console.log("Cool");
  } else if ((a >= 5.0 && a <= 11.9)) {
    console.log("Cold");
  } else {
    console.log("unknown");
  
  }
}

weatherForecast(["16.5"]);
weatherForecast(["22.4"]);
weatherForecast(["26"]);
weatherForecast(["0"]);