function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const pieces = Number(input[2]);
  let price = 0;

  if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
      if (fruit === "banana"){
          price = 2.5;
      } else if (fruit === "apple"){
          price = 1.2;
      } else if (fruit === "orange"){
          price = 0.85;
      } else if (fruit === "grapefruit"){
          price = 1.45;
      } else if (fruit === "kiwi"){
          price = 2.7;
      } else if (fruit === "pineapple"){
          price = 5.5;
      } else if (fruit === "grapes"){
          price = 3.85;
   
      }
     } else if (day === "Saturday" || day === "Sunday" ){
      if (fruit === "banana"){
          price = 2.7;
      } else if (fruit === "apple"){
          price = 1.25;
      } else if (fruit === "orange"){
          price = 0.90;
      } else if (fruit === "grapefruit"){
          price = 1.60;
      } else if (fruit === "kiwi"){
          price = 3;
      } else if (fruit === "pineapple"){
          price = 5.6;
      } else if (fruit === "grapes"){
          price = 4.2;
      } else {
          console.log("error")
      }
     } 
     if (price === 0) {
        console.log("error");
      } else {
        console.log((price * pieces).toFixed(2));
      }
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
