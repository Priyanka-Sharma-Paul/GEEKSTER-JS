const readline = require("readline");
let calculator = {
  a: 0,
  b: 0,
  read() {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question("Enter the first number: ", (firstInput) => {
        this.a = parseFloat(firstInput);
        rl.question("Enter the second number: ", (secondInput) => {
          this.b = parseFloat(secondInput);
          rl.close();
          resolve();
        });
      });
    });
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
(async function () {
  await calculator.read();
  console.log("Sum: " + calculator.sum());
  console.log("Product: " + calculator.mul());
})();
