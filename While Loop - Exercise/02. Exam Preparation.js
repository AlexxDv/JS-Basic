function examPrep(input) {
    let index = 0;
    let numberOfBadGrades = Number(input[index++]);
    let nameOfTheTask = input[index++];
    let badScoreCounter = 0;
    let sumGrades = 0;
    let numberOfProblems = 0;
    let lastProblemName = "";
    
    while (nameOfTheTask !== "Enough"){
        lastProblemName = nameOfTheTask;
        let curentGrade  = Number(input[index++])
        numberOfProblems++ 
        sumGrades += curentGrade
        if (curentGrade <= 4){
            badScoreCounter++;
        }
        if (badScoreCounter >= numberOfBadGrades){
            console.log(`You need a break, ${badScoreCounter} poor grades.`);
            break;
        }
        nameOfTheTask = input[index++];
    }
    if (nameOfTheTask === "Enough"){
        let avgGrade = ( sumGrades/ numberOfProblems).toFixed(2)
        console.log(`Average score: ${avgGrade}`)
        console.log(`Number of problems: ${numberOfProblems}`)
        console.log(`Last problem: ${lastProblemName}`)
    }
}
examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
// examPrep(["2",
// "Income",
// "3",
// "Game Info",
// "6",
// "Best Player",
// "4"])

