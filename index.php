<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Widerstandsrechner</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="shortcut icon" href="./colorPallet.png" type="image/x-icon" />
  </head>
  <body>
    <!-- Hintergrund mit der Überschrift -->
    <div class="background">
      <h1 class="header">Widerstandsrechner</h1>
    </div>
    
    <!-- Container mir dem Widerstand und einem Formular -->
    <div class="form-wrapper">
      <!-- Widerstand -->
      <div class="widerstand-wrapper">
        <div
          style="background-color: black"
          id="color-ring-1"
          class="color ring-1"
        ></div>
        <div
          style="background-color: black"
          id="color-ring-2"
          class="color ring-2"
        ></div>
        <div
          style="background-color: brown"
          id="color-ring-3"
          class="color ring-3"
        ></div>
        <div
          style="background-color: brown"
          id="color-ring-4"
          class="color ring-4"
        ></div>
      </div>
      <!-- Formular -->
      <form action="./calc.php" method="get">
        <div class="input-wrapper ring-1">
          <label class="label-input" for="ring-1">Ring 1:</label>
          <select id="list-input-ring-1" class="list-input" name="ring-1">
            <option value="black">Schwarz</option>
            <option value="brown">Braun</option>
            <option value="red">Rot</option>
            <option value="orange">Orange</option>
            <option value="yellow">Gelb</option>
            <option value="green">Grün</option>
            <option value="blue">Blau</option>
            <option value="violet">Violett</option>
            <option value="gray">Grau</option>
            <option value="white">Weiß</option>
          </select>
        </div>
        <div class="input-wrapper ring-2">
          <label class="label-input" for="ring-2">Ring 2:</label>
          <select id="list-input-ring-2" class="list-input" name="ring-2">
            <option value="black">Schwarz</option>
            <option value="brown">Braun</option>
            <option value="red">Rot</option>
            <option value="orange">Orange</option>
            <option value="yellow">Gelb</option>
            <option value="green">Grün</option>
            <option value="blue">Blau</option>
            <option value="violet">Violett</option>
            <option value="gray">Grau</option>
            <option value="white">Weiß</option>
          </select>
        </div>
        <div class="input-wrapper ring-3">
          <label class="label-input" for="ring-3">Ring 3:</label>
          <select id="list-input-ring-3" class="list-input" name="ring-3">
            <option value="brown">Braun</option>
            <option value="red">Rot</option>
            <option value="orange">Orange</option>
            <option value="yellow">Gelb</option>
            <option value="green">Grün</option>
            <option value="blue">Blau</option>
            <option value="violet">Violett</option>
            <option value="gold">Gold</option>
            <option value="silver">Silber</option>
          </select>
        </div>
        <div class="input-wrapper ring-4">
          <label class="label-input" for="ring-4">Ring 4:</label>
          <select id="list-input-ring-4" class="list-input" name="ring-4">
            <option value="brown">Braun</option>
            <option value="red">Rot</option>
            <option value="green">Grün</option>
            <option value="blue">Blau</option>
            <option value="violet">Violett</option>
            <option value="gold">Gold</option>
            <option value="silver">Silber</option>
          </select>
        </div>
        <input type="submit" value="Berechnen!" class="button calc" />
      </form>
    </div>
  </body>
  <!-- Javascript-Dokument wird eingebunden -->
  <script src="./function.js"></script>
</html>
