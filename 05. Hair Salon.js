function hairSalon(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let price = 0;
    let sum = 0;

    while (command != "closed") {
        let gender = input[index];
        index++;

        switch (command) {
            case "haircut":
                switch (gender) {
                    case "mens": price = 15; break;
                    case "ladies": price = 20; break;
                    case "kids": price = 10; break;
                } break;
                case "color": 
                switch (gender) {
                    case "touch up": price = 20; break;
                    case "full color": price = 30; break;
                }break;
        }
        sum += price
        if (sum >=target) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${sum}lv.`);
            break;
        }
        command = input[index];
        index++
    }
    if (command == "closed") {
        console.log(`Target not reached! You need ${target - sum}lv. more.`)
        console.log(`Earned money: ${sum}lv.`);
    }
}
// hairSalon(["300",
// "haircut",
// "ladies",
// "haircut",
// "kids",
// "color",
// "touch up",
// "closed"])
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
