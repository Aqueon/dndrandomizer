<?php
    echo '<div id="potions">';
        echo '<label for="potion_quantity">Nr. of potions: </label><input type="number" id="potion_quantity" value="1" min="1"><br>';
        echo '<label for="potion_sideeffects">Nr. of side effects: </label><input type="number" value="0" min="0" id="potion_sideeffects"><br>';
        echo '<label for="potion_spoiledchance">Chance of spoiled (side effect only) in %: </label><input type="number" value="5" min="0" max="100" id=potion_spoiledchance><br>';
        echo '<button id="potion_generator">Generate potion(s)</button><button id="potions_history_show">Show history</button>';
        echo '<div id="potions_results"></div>';
    echo '</div>';
    echo '<script src="./js/potions.js"></script>';
?>