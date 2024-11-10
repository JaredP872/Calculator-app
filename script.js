// the variable being created below is used to assign digitView the value of document.getElementById("digitView") on the html File.
const digitView = document.getElementById("digitView");

// The function below is used to connect the digitView class from the html to the JS file using DOM manipulation.
// the += will make it so that the characters added to the display come one after the other instead of replacing the last character placed.
function appendToDisplay(input) {
  digitView.value += input;
}

// The function below will clear the display on the screen once you click AC becouse AC has a value equal to an empty string in the HTML.
function clearDisplay() {
  digitView.value = "";
}

// The function below will evaluate the content you put inside the calculator by using the eval function
// The try and catch statement below is used to evaluate the input. If the eval function can't evaluate what the user puts in, the catch statement will activate and output an error message.
function calculate() {
  try {
    digitView.value = eval(digitView.value);
  } catch (error) {
    digitView.value = "Error";
  }
}
