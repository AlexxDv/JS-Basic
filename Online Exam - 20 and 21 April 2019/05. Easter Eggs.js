function easterEggs(input) {
   let index = 0;
   let totalEggs = Number(input[index]);
   index++;
   let red = 0;
   let orange = 0;
   let blue = 0;
   let green = 0;
   let max;
   let maxEgg = 0;

   for (let i = 0; i < totalEggs; i++) {
      let color = input[index];
      index++;
      switch (color) {
         case "red":
            red++;
            break;
         case "orange":
            orange++;
            break;
         case "blue":
            blue++;
            break;
         case "green":
            green++;
            break;
      }
   }
   if (red > orange && red > blue && red > green) {
      max = "red";
      maxEgg = red;
   } else if (orange > red && orange > blue && orange > green) {
      max = "orange";
      maxEgg = orange;
   } else if (blue > orange && blue > red && blue > green) {
      max = "blue";
      maxEgg = blue;
   } else {
      max = "green";
      maxEgg = green;
   }
   console.log(`Red eggs: ${red}`);
   console.log(`Orange eggs: ${orange}`);
   console.log(`Blue eggs: ${blue}`);
   console.log(`Green eggs: ${green}`);
   console.log(`Max eggs: ${maxEgg} -> ${max}`);
}
// easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]);
