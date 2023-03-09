function concetenateData(input) {

    let firstName = input[0]
    let lastName = input[1]
    let age = Number(input[2])
    let place = input[3]
    let str = "You are" + " " + firstName + " " + lastName + "," + " " + "a" + " " + age + "-years" + " " + "old" + " " + "person" + " "+ "from" + " " + place + ".";

    let str2 = `You are ${firstName} ${lastName}, a ${age}-years old person from ${place}.`
    console.log(str);  

    console.log(str2)
    }
    
    concetenateData(["Alex", "Dimov", 37, "Warsaw"])

