function newHouse(input) {
    const roses = 5;
    const dahlias = 3.8;
    const tulips = 2.8;
    const narcissus = 3;
    const gladiolus = 2.5;

    const flowersType = input[0];
    const flowersQuantity = Number(input[1]);
    const budget = Number(input[2]);

    let totalBill = 0
    let flowersPrice = 0

        switch (flowersType){
            case "Roses": 
            if (flowersQuantity > 80) {
                flowersPrice = 0.9 * roses
            } else {flowersPrice = roses}; break;
            case "Dahlias": 
            if (flowersQuantity > 90) { 
                flowersPrice = 0.85 * dahlias 
            } else { flowersPrice = dahlias}; break;
            case "Tulips": 
            if (flowersQuantity > 80) {
                flowersPrice = 0.85 * tulips
            } else { flowersPrice = tulips}; break;
            case "Narcissus": 
            if (flowersQuantity < 120) {
                flowersPrice = 1.15 * narcissus
            } else {flowersPrice = narcissus }; break;
            case "Gladiolus":
            if (flowersQuantity < 80) {
                flowersPrice = 1.20 * gladiolus
            } else { flowersPrice = gladiolus}; break;
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
