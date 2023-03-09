function newHouse(input) {
    const roses = 5;
    const dahlias = 3.8;
    const tulips = 2.8;
    const narcissus = 3;
    const gladiolus = 2.5;

    const flowersType = input[0];
    const flowersQuantity = Number(input[1]);
    const budget = Number(input[2]);

    let discount = 0
    let totalBill = 0
    let flowersPrice = 0

    if (flowersType === "Roses" && flowersQuantity > 80) {
        discount = 0.9;
    } else if (flowersType === "Dahlias" && flowersQuantity > 90) {
        discount = 0.85;
    } else if (flowersType === "Tulips" && flowersQuantity > 80) {
        discount = 0.85;
    } else if (flowersType === "Narcissus" && flowersQuantity < 120) {
        discount = 1.15;
    } else if (flowersType === "Gladiolus" && flowersQuantity < 80) {
        discount = 1.20;
    } else {
        discount = 1
    }
        switch (flowersType){
            case "Roses": flowersPrice = discount * roses; break;
            case "Dahlias": flowersPrice = discount * dahlias; break;
            case "Tulips": flowersPrice = discount * tulips; break;
            case "Narcissus": flowersPrice = discount * narcissus; break;
            case "Gladiolus": flowersPrice = discount * gladiolus; break;
        }

    totalBill = flowersQuantity * flowersPrice

    if (totalBill > budget){
        console.log(`Not enough money, you need ${(totalBill - budget).toFixed(2)} leva more.`)
    } else  {
        console.log(`Hey, you have a great garden with ${flowersQuantity} ${flowersType} and ${(budget - totalBill).toFixed(2)} leva left.`)
    }
  
}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
