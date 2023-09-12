const buttonsOperations = document.querySelectorAll("button");
const userInputOne = document.querySelector(".inputNumber1");
const userInputTwo = document.querySelector(".inputNumber2");
const output = document.querySelector(".result");

buttonsOperations.forEach((button) => {
  button.addEventListener("click", () => {
    const inputValue = button.innerHTML;
    switch (inputValue) {
      case "+":
        output.innerHTML =
          parseInt(userInputOne.value) + parseInt(userInputTwo.value);
        break;
      case "-":
        output.innerHTML =
          parseInt(userInputOne.value) - parseInt(userInputTwo.value);
        break;
      case "*":
        output.innerHTML =
          parseInt(userInputOne.value) * parseInt(userInputTwo.value);
        break;
      case "/":
        output.innerHTML =
          parseInt(userInputOne.value) / parseInt(userInputTwo.value);
        break;
    }
  });
});
