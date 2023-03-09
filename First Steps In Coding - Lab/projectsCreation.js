function projectCreation(input) {

    let firstName = input[0]
    let projects = Number(input[1])
    let str = `The architect ${firstName} will need ${projects*3} hours to complete ${projects} project/s.`

    console.log(str)
   

    }
    
    projectCreation(["George", 4,])