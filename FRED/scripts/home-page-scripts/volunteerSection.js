let words = ["HELP US CREATE A COURSE!", "NEED TO CREATE A COURSE?", "JOIN OUR TEACHERS COMMUNITY"];
let count = 0;
let letter = 0;
let wordToPrint = "";
let direction = "forward";
let heading = document.querySelector(".volunteer-section-heading");

function typewriter() {
  let word = words[count];

  if (direction == "forward") {
    if (letter < word.length) {
      wordToPrint += word[letter];
      letter++;
      updateText(wordToPrint);
    } else {
      direction = "backward";
    }
  } else {
    if (wordToPrint.length > 0) {
      wordToPrint = wordToPrint.slice(0, -1);
      updateText(wordToPrint);
    } else {
      startOver();
    }
  }
}

function startOver() {
  resetState();
  if (count < words.length - 1) {
    count++;
  } else {
    count = 0;
  }
}

function resetState() {
  letter = 0;
  wordToPrint = "";
  direction = "forward";
}

function updateText(text) {
  heading.textContent = text;
}

setInterval(typewriter, 100);