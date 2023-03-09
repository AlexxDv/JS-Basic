function easterShop(input) {
   let index = 0;
   let startingEggs = Number(input[index]);
   index++;
   let command = input[index];
   index++;
   let sells = 0;

   while (command !== "Close") {
      let quantity = Number(input[index]);
      index++;
      if (command === "Buy") {
         if (startingEggs - quantity < 0) {
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${startingEggs}.`);
            break;
         } else {
            sells += quantity;
            startingEggs -= quantity;
         }
      } else if (command === "Fill") {
         
         startingEggs += quantity;
      }
      command = input[index];
      index++;
   }
   if (command === "Close") {
      console.log("Store is closed!");
      console.log(`${sells} eggs sold.`);
   }
}
// easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
