function summerOutfit(input) {
  const degress = Number(input[0]);
  const day = input[1];

  let outfit;
  let shoes;

  if (degress >= 10 && degress <= 18) {
    if (day === "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (day === "Afternoon" || day === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (degress > 18 && degress <= 24) {
    if (day === "Morning" || day === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (day === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  } else if (degress >= 25) {
    if (day === "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (day === "Afternoon") {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    } else if (day === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  console.log(`It's ${degress} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);
