<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Widerstandsrechner</title>
        <link rel="stylesheet" href="style.css">
        <link rel="shortcut icon" href="./colorPallet.png" type="image/x-icon" />
    </head>
    <body>
        <div class='background'>
            <h1 class='header'>Widerstandsrechner</h1>
        </div>
        <div class='content-calc'>
            <div class='text-calc'>
                <?php
                    // Daten der Farben der einzelnen Ringe werden verarbeitet und gespeichert
                    $rings = array(
                        strtolower($_GET["ring-1"]),
                        strtolower($_GET["ring-2"]),
                        strtolower($_GET["ring-3"]),
                        strtolower($_GET["ring-4"])
                    );

                    // Werte der jeweiligen Farben in den dazu gehörigen Ringen werden defeniert
                    $ring_vals = array(
                        array("black" => 0, "brown" => 1, "red" => 2, "orange" => 3, "yellow" => 4, "green" => 5, "blue" => 6, "violet" => 7, "gray" => 8, "white" => 9, "gold" => "-", "silver" => "-"),
                        array("black" => "-", "brown" => 10, "red" => 100, "orange" => 1000, "yellow" => 10000, "green" => 100000, "blue" => 1000000, "violet" => 10000000, "gray" => "-", "white" => "-", "gold" => 0.1, "silver" => 0.01),
                        array("black" => "-", "brown" => 1, "red" => 2, "orange" => "-", "yellow" => "-", "green" => 0.5, "blue" => 0.25, "violet" => 0.1, "gray" => "-", "white" => "-", "gold" => 5, "silver" => 10)
                    );

                    $widerstand = ($ring_vals[0][$rings[0]] . $ring_vals[0][$rings[1]]) * $ring_vals[1][$rings[2]]; // Der Widerstand wird berechnet
                    $toleranz = $ring_vals[2][$rings[3]];   // Prozentsatz der Toleranz wird gespeichert
                    $toleranz_val_min = $widerstand * (1 - $toleranz / 100);    // Prozentwert der minimalen Toleranz wird berechnet
                    $toleranz_val_max = $widerstand * (1 + $toleranz / 100);    // Prozentwert der maximalen Toleranz wird berechnet

                    // Werte sowie ein Zurück-Button werden auf der Seite dargestellt
                    echo "
                    Der Widerstandswert beträgt: {$widerstand}Ω<br><br>
                    Die Toleranz beträgt: {$toleranz}%<br>
                    Das bedeutet, von {$toleranz_val_min}Ω bis {$toleranz_val_max}Ω
                    ";
                ?>
            </div>
            <br>
            <form action="./index.php" method="get">
                <input type='submit' value='Zurück!' class='button back'>
            </form>
        </div>
    </body>
</html>