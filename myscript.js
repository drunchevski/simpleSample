let buttonPressCounter = 0; // Исполняется в самом самом начале, когда страница отображается первый раз

function buttonClicked() {
  let defaultColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = "pink";

  alert("AAAHHHHHHHHHHHH x" + buttonPressCounter);

  document.body.style.backgroundColor = defaultColor;

  buttonPressCounter += 1;
  console.log(buttonPressCounter); //F12 -> Console
}
