function walking(input) {
  let index = 0;
  let goal = 10000;
  let command = input[index++];
  let currentSteps = 0;

  while (command !== "Going home") {
    let steps = Number(command);
    currentSteps += steps;
    goal -= steps;
    if (goal <= 0) {
      console.log("Goal reached! Good job!");
      console.log(`${Math.abs(goal)} steps over the goal!`);
      break;
    }
    command = input[index++];
  }
  if (command === "Going home") {
    let leftSteps = Number(input[index++]);
    goal -= leftSteps;
    if (goal <= 0) {
      console.log("Goal reached! Good job!");
      console.log(`${Math.abs(goal)} steps over the goal!`);
    } else {
      console.log(`${goal} more steps to reach goal.`);
    }
  }
}
walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
