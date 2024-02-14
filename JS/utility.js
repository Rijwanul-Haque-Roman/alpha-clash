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
  return alphabets[parseInt(Math.random(0, 26) * 10)];
}

function addBg(elementID) {
  document
    .getElementById(elementID)
    .classList.add("bg-amber-500", "text-[#1E0668]");
}
