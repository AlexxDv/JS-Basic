function salaryTotal(input){
    let index = 0;
    let openTabs = Number(input[index++]);
    let salary = Number(input[index++]);
    let haveSalary = true;
 
    for (let i = 0; i < openTabs; i++){
        let site = input[index++];
        if (site === "Facebook"){
            salary -= 150
        } else if (site === "Instagram"){
            salary -= 100
        } else if (site === "Reddit"){
            salary -= 500
        }

        if (salary <= 0){
            console.log("You have lost your salary.");
            haveSalary = false;
            break;
        }
    }
    if(haveSalary){
    console.log(salary)
    }
}
salaryTotal(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])