// calculation
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

// storage
function savecalculation(num1, num2, operator, result) {
    const calculation = {
        num1: num1,
        num2: num2,
        operator: operator,
        result: result
    };
    localStorage.setItem("calculation", JSON.stringify(calculation));

}

// history
calculate.prototype.saveToStorage = function(num1, num2, operator, result) {
    localStorage.setItem(`calculation`, JSON.stringify(calculation));

}

calculate.prototype.loadFromStorage = function(num1, num2, operator, result) {
    const savedData = localStorage.getItem(`calculation`);
    return savedData ? JSON.parse(savedData) : {};
}