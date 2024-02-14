function playNow() {
  hideElement("home-section");
  showElement("playground-section");
  gameloop();
}

function gameloop() {
  // generate a random alphabet
  const letter = randomAlpha();
  // show the random alphabet to the screen
  document.getElementById("alphabet").innerText = letter.toUpperCase();
  // highlight the bg
  addBg(letter);
}
