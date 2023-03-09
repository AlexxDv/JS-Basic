function oscars(input) {
    let index = 0;
    let actorName = input[index++];
    let academyPoints = Number(input[index++]);
    let numberOfJuges = Number(input[index++]);
    let isGetting = true

    for (let i = 0; i < numberOfJuges; i++){
        let name = input[index++]
        let tempPoint = Number(input[index++])

        academyPoints += name.length * tempPoint / 2

        if (academyPoints > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
            isGetting = false
            break;
        }
    }
    let diff = Math.abs(academyPoints - 1250.5).toFixed(1)
    if (isGetting) {
    console.log(`Sorry, ${actorName} you need ${diff} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

