function foodForPets(input) {
  let index = 0;
  let days = Number(input[index++]);
  let totalStartingFood = Number(input[index++]);

  let dogFoodPerDay = 0;
  let catFoodPerDay = 0;
  let biscuits = 0;

  for (let i = 1; i <= days; i++) {
    let totalDogFood = Number(input[index++]);
    dogFoodPerDay += totalDogFood;
    let totalCatFood = Number(input[index++]);
    catFoodPerDay += totalCatFood;

    if (i % 3 === 0) {
      biscuits += (totalDogFood + totalCatFood) * 0.1;
    }
  }
  let eatenfood = dogFoodPerDay + catFoodPerDay;
  let totalEatenfoodPercent = ((eatenfood / totalStartingFood) * 100).toFixed(
    2
  );
  let percentOfTheDog = ((dogFoodPerDay / eatenfood) * 100).toFixed(2);
  let percentOfTheCat = ((catFoodPerDay / eatenfood) * 100).toFixed(2);

  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(`${totalEatenfoodPercent}% of the food has been eaten.`);
  console.log(`${percentOfTheDog}% eaten from the dog.`);
  console.log(`${percentOfTheCat}% eaten from the cat.`);
}
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]); 