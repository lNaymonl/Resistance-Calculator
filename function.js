// Input-Elemente werden aus "index.php" gespeichert
let input = [
  document.getElementById("list-input-ring-1"),
  document.getElementById("list-input-ring-2"),
  document.getElementById("list-input-ring-3"),
  document.getElementById("list-input-ring-4"),
];

// Farbring-Elemente des Widerstands werden aus "index.php" gespeichert
let colorDiv = [
  document.getElementById("color-ring-1"),
  document.getElementById("color-ring-2"),
  document.getElementById("color-ring-3"),
  document.getElementById("color-ring-4"),
];

// EventListener werden erstellt und werden aktiv wenn sich der Wert eines Input-Elements ändert
// Dann wird die Hintergrundfarbe des dazugehörigen Farbringes, zu der angegebenen Farbe, geändert
input[0].addEventListener("change", (e) => {
  colorDiv[0].style.backgroundColor = e.target.value;
});

input[1].addEventListener("change", (e) => {
  colorDiv[1].style.backgroundColor = e.target.value;
});

input[2].addEventListener("change", (e) => {
  colorDiv[2].style.backgroundColor = e.target.value;
});

input[3].addEventListener("change", (e) => {
  colorDiv[3].style.backgroundColor = e.target.value;
});
