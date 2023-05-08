// Input-Elemente werden aus "index.php" gespeichert
let input = [
  document.getElementById("list-input-ring-1"),
  document.getElementById("list-input-ring-2"),
  document.getElementById("list-input-ring-3"),
  document.getElementById("list-input-ring-4"),
];

let preOutputs = [
  document.querySelector(".pre-output.ring-1"),
  document.querySelector(".pre-output.ring-2"),
  document.querySelector(".pre-output.ring-3"),
  document.querySelector(".pre-output.ring-4"),
];

let output = document.querySelector(".output");

// Farbring-Elemente des Widerstands werden aus "index.php" gespeichert
let colorDiv = [
  document.getElementById("color-ring-1"),
  document.getElementById("color-ring-2"),
  document.getElementById("color-ring-3"),
  document.getElementById("color-ring-4"),
];

let ring_vals = {
  0: {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
    gold: "-",
    silver: "-",
  },
  1: {
    black: "-",
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    gray: "-",
    white: "-",
    gold: 0.1,
    silver: 0.01,
  },
  2: {
    black: "-",
    brown: 1,
    red: 2,
    orange: "-",
    yellow: "-",
    green: 0.5,
    blue: 0.25,
    violet: 0.1,
    gray: "-",
    white: "-",
    gold: 5,
    silver: 10,
  },
};

// let i = 0;
// preOutputs.forEach((element) => {
//   console.log(element.textContent);
//   element.textContent = i;
//   console.log(element.textContent);
//   i++;
// });

function setCacheObj(name = "", value = "") {
  localStorage.setItem(name, value);
}

let getCacheObj = (name = "") => {
  return localStorage.getItem(name);
};

let checkCacheObj = (name = "") => {
  let item = localStorage.getItem(name);
  if (item != null && item != "") {
    return true;
  }
  return false;
};

function setInput(inputIndex, valueContent) {
  input[inputIndex].value = valueContent;
}

function setColorDiv(divIndex = 0, value) {
  colorDiv[divIndex].style.backgroundColor = value;
}

function setPreOutput(outputIndex = 0, value) {
  switch (outputIndex) {
    case 0:
      preOutputs[outputIndex].textContent = ring_vals[0][value];
      break;

    case 1:
      preOutputs[outputIndex].textContent = ring_vals[outputIndex - 1][value];
      break;

    case 2:
      preOutputs[outputIndex].textContent =
        "x" + ring_vals[outputIndex - 1][value];
      break;

    case 3:
      preOutputs[outputIndex].textContent =
        ring_vals[outputIndex - 1][value] + "%";
      break;
  }
}

function updateOutput() {
  let widerstand = parseInt(
    ring_vals[0][input[0].value].toString() +
      ring_vals[0][input[1].value].toString() * ring_vals[1][input[2].value]
  );

  let toleranz = ring_vals[2][input[3].value];
  let min_toleranz = widerstand * (1 - toleranz / 100);
  let max_toleranz = widerstand * (1 + toleranz / 100);
  console.log({ widerstand, toleranz, min_toleranz, max_toleranz });

  output.innerHTML =
    "Der Widerstandswert beträgt: " +
    widerstand +
    "Ω.<br><br>" +
    " Die Toleranz ebträgt: " +
    toleranz +
    "%.<br>" +
    "Das bedeutet, von " +
    min_toleranz +
    "Ω bis " +
    max_toleranz +
    "Ω.";

  //   console.log(ring_vals[1][input[2].value]);

  //   input.forEach((element) => {
  //     console.log(element.value);
  //     console.log(ring_vals[0][element.value]);
  //   });
}
window.addEventListener("load", () => {
  for (i = 0; i < 4; i++) {
    if (checkCacheObj("color" + i)) {
      let color = getCacheObj("color" + i);
      setInput(i, color);
      setColorDiv(i, color);

      setPreOutput(i, color);
    }
  }

  updateOutput();
});

// EventListener werden erstellt und werden aktiv wenn sich der Wert eines Input-Elements ändert
// Dann wird die Hintergrundfarbe des dazugehörigen Farbringes, zu der angegebenen Farbe, geändert
input[0].addEventListener("change", (e) => {
  //   colorDiv[0].style.backgroundColor = e.target.value;
  let event = e.target.value;
  setColorDiv(0, event);

  setPreOutput(0, event);

  updateOutput();

  // setCookie("color1", e.target.value);
  setCacheObj("color0", event);
});

input[1].addEventListener("change", (e) => {
  let event = e.target.value;

  setColorDiv(1, event);

  setPreOutput(1, event);

  updateOutput();

  // setCookie("color2", event.target.value);
  setCacheObj("color1", event);
});

input[2].addEventListener("change", (e) => {
  let event = e.target.value;

  setColorDiv(2, event);

  setPreOutput(2, event);

  updateOutput();

  // setCookie("color3", event.target.value);
  setCacheObj("color2", event);
});

input[3].addEventListener("change", (e) => {
  let event = e.target.value;

  setColorDiv(3, event);

  setPreOutput(3, event);

  updateOutput();

  // setCookie("color4", event.target.value);
  setCacheObj("color3", event);
});
