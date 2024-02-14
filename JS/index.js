function playNow() {
  hideElement("home-section");
  hideElement("score-section");
  showElement("playground-section");
  gameloop();
}

function gameloop() {
  // generate a random alphabet
  const letter = randomAlpha();
  // show the random alphabet to the screen
  document.getElementById("alphabet").innerText = letter;
  // highlight the bg
  addBg(letter);
}

// keypress handler
document.addEventListener("keyup", keyPressHandler);
