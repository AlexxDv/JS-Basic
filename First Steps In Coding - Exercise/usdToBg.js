function usdToBG(input) {
    const fixedvalue = 1.79549 
    let USD = Number(input[0])
    let BGN = USD * fixedvalue

    console.log(BGN)
}


usdToBG(["22"])