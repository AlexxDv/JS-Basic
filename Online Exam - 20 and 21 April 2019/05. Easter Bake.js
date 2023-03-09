function easterBake(input) {
   let index = 0;
   let easterBreadQuantity = Number(input[index]);
   index++;

   let sugarNeeded = 0;
   let flourNeeded = 0;
   let maxFlour = 0;
   let maxSugar = 0;

   for (let i = 0; i < easterBreadQuantity; i++) {
      let sugar = Number(input[index]);
      index++;
      if (sugar > maxSugar) {
         maxSugar = sugar;
      }
      sugarNeeded += sugar;

      let flour = Number(input[index]);
      index++;
      if (flour > maxFlour) {
         maxFlour = flour;
      }
      flourNeeded += flour;
   }
   let sugarPackages = Math.ceil(sugarNeeded / 950);
   let flourPackages = Math.ceil(flourNeeded / 750);

   console.log(`Sugar: ${sugarPackages}`);
   console.log(`Flour: ${flourPackages}`);
   console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
