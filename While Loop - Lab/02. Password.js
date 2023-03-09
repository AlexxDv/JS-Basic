function password(input) {
  let index = 0;
  let user = input[index++];
  let pass = input[index++];
  let data = input[index++];

  while (data !== pass) {
    data = input[index++];
  }
  console.log(`Welcome ${user}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
