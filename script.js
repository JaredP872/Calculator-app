const digitView = document.getElementById("digitView");

// The function below is used to connect the digitView class from the html to the JS file using DOM manipulation.
// the += will make it so that the characters added to the display come one after the other instead of replacing the last character placed.
function appendToDisplay(input) {
  digitView.value += input;
}

function clearDisplay() {
  digitView.value = "";
}

function calculate() {
  try {
    digitView.value = eval(digitView.value);
  } catch (error) {
    digitView.value = "Error";
  }
}
