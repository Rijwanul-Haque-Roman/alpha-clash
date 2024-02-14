function hideElement(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}

function showElement(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}

function randomAlpha() {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return alphabets[Math.round(Math.random() * 25)];
}

function addBg(elementID) {
  document
    .getElementById(elementID)
    .classList.add("bg-amber-500", "text-[#1E0668]");
}

function removeBg(elementID) {
  document
    .getElementById(elementID)
    .classList.remove("bg-amber-500", "text-[#1E0668]");
}

function keyPressHandler(event) {
  if (event.key === "Enter") {
    location.reload();
  }
  const pressed = event.key;
  const shouldPress = document.getElementById("alphabet").innerText;

  let life = document.getElementById("life").innerText;
  life = parseInt(life);

  let score = document.getElementById("live-score").innerText;
  score = parseInt(score);

  if (pressed === shouldPress && life !== 0) {
    score++;
    document.getElementById("live-score").innerText = score;
    document.getElementById("score").innerText = score;
    removeBg(shouldPress);
    gameloop();
  } else {
    life--;
    if (life > 0) {
      document.getElementById("life").innerText = life;
    } else if (life <= 0) {
      document.getElementById("life").innerText = 3;
      document.getElementById("live-score").innerText = 0;
      hideElement("playground-section");
      showElement("score-section");
      removeBg(shouldPress);
    }
  }

  //   console.log(pressed, shouldPress);
}
