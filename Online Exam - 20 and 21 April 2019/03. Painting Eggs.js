function paitingEggs(input) {
   let dimentions = input[0];
   let color = input[1];
   let quantity = Number(input[2]);

   let price = 0;

   switch (color) {
      case "Red":
         switch (dimentions) {
            case "Large":
               price = 16;
               break;
            case "Medium":
               price = 13;
               break;
            case "Small":
               price = 9;
               break;
         }
         break;
      case "Green":
         switch (dimentions) {
            case "Large":
               price = 12;
               break;
            case "Medium":
               price = 9;
               break;
            case "Small":
               price = 8;
               break;
         }
         break;
      case "Yellow":
         switch (dimentions) {
            case "Large":
               price = 9;
               break;
            case "Medium":
               price = 7;
               break;
            case "Small":
               price = 5;
               break;
         }
         break;
   }
   let total = price * quantity;
   let costs = total * 0.35;
   console.log(`${(total - costs).toFixed(2)} leva.`);
}
paitingEggs(["Large", "Red", "7"]);
paitingEggs(["Medium", "Green", "5"]);
paitingEggs(["Small", "Yellow", "3"]);
