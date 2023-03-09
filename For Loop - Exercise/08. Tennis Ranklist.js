function tennisRanklist(input){
    let index = 0;

    let touranemntCount = Number(input[index++]);
    let startPoints = Number(input[index++]);
    let tempPoints = 0;
    let counterW = 0;

    for(let i = 0; i < touranemntCount; i++){
        let score = input[index++]
        switch(score) {
            case "W": 
            tempPoints += 2000;
            counterW++;
            break;
            case "F": tempPoints += 1200; break;
            case "SF": tempPoints += 720; break;
        }
    }
    console.log(`Final points: ${tempPoints + startPoints}`)
    console.log(`Average points: ${Math.floor(tempPoints / touranemntCount)}`)
    console.log(`${(counterW / touranemntCount * 100).toFixed(2)}%`)
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
