function yardGreening(input) {

    let squaremeters = Number(input[0])
    let str = `The final price is: ${squaremeters*7.61 - squaremeters*7.61*0.18} lv.`
    let str1 = `The discount is: ${squaremeters*7.61*0.18} lv.`


    console.log(str)
    console.log(str1)
   

    }
    
    yardGreening(["550"])