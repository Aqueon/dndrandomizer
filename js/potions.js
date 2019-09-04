$(document).ready(function (){

    let potion_type = new Array;
    let potion_mainEffect = new Array;
    let potion_strength = new Array;
    let potion_sideEffect = new Array;
    let potion_container = new Array;
    let potion_appearance1 = new Array;
    let potion_appearance2 = new Array;
    let potion_texture = new Array;
    let potion_taste = new Array;
    let potion_label = new Array;

    $.get('./potions/potion_type.txt', data => potion_type = data.split('\n'));    
    $.get('./potions/potion_mainEffect.txt', data =>potion_mainEffect = data.split('\n'));
    $.get('./potions/potion_strength.txt', data => potion_strength = data.split('\n'));
    $.get('./potions/potion_sideEffect.txt', data => potion_sideEffect = data.split('\n'));
    $.get('./potions/potion_container.txt', data => potion_container = data.split('\n'));
    $.get('./potions/potion_appearance1.txt', data => potion_appearance1 = data.split('\n'));
    $.get('./potions/potion_appearance2.txt', data => potion_appearance2 = data.split('\n'));
    $.get('./potions/potion_texture.txt', data => potion_texture = data.split('\n'));
    $.get('./potions/potion_taste.txt', data => potion_taste = data.split('\n'));
    $.get('./potions/potion_label.txt', data => potion_label = data.split('\n'));

    $('#potion_generator').on('click', GeneratePotion);
    let potions_history_button = $('#potions_history_show');
    potions_history_button.on('click', () => {
        let potion_history = $('#potions_history');
        if (potion_history.css("display") === "none") {
            potion_history.css("display", "block");
            potions_history_button.html('Hide history');
        } else {
            potion_history.css("display", "none");
            potions_history_button.html('Show history');
        }
    });

    function GeneratePotion () {
        const quantity = $("#potion_quantity").val();
        const sideffects = $("#potion_sideeffects").val();
        const spoiledChance = $("#potion_spoiledchance").val();
        let spoiled = 0;
        let mainBody = $("#potions_results");
        let history = $("#potions_history");
        let element, spoiledStart, spoiledEnd, resultElement;

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            spoiled = Math.floor((Math.random() * 100) + 1);
            if (spoiled <= spoiledChance) {
                spoiledStart = "<font color='#FF0000'><i>";
                spoiledEnd = "</i></font>";
            } else {
                spoiledStart = spoiledEnd = "";
            }
            element = "<h4>Potion " + (i+1) + ":</h4><p>" + 
                        "<b>Type:</b> " + potion_type[Math.floor(Math.random() * potion_type.length)] + "<br>" +
                        "<b>Main effect:</b> " + potion_mainEffect[Math.floor(Math.random() * potion_mainEffect.length)] + "<br>" +
                        "<b>Strength:</b> " + potion_strength[Math.floor(Math.random() * potion_strength.length)] + "<br>" +
                        "<b>Side effects:</b> " + potion_sideEffect[Math.floor(Math.random() * potion_sideEffect.length)] + "<br>" +
                        "<b>Container:</b> " + potion_container[Math.floor(Math.random() * potion_container.length)] + "<br>" +
                        "<b>Appearance:</b> " + potion_appearance1[Math.floor(Math.random() * potion_appearance1.length)] + " with " + potion_appearance2[Math.floor(Math.random() * potion_appearance2.length)].toLowerCase() + "<br>" +
                        "<b>Texture:</b> " + potion_texture[Math.floor(Math.random() * potion_texture.length)] + "<br>" +
                        "<b>Taste:</b> " + potion_taste[Math.floor(Math.random() * potion_taste.length)] + "<br>" +
                        "<b>Smell:</b> " + potion_taste[Math.floor(Math.random() * potion_taste.length)] + "<br>" +
                        "<b>Label:</b> " + potion_label[Math.floor(Math.random() * potion_label.length)] + "</p>";

            // if (sideffects !== "0") {
            //     element += ", bad stuff";
            // }
            // element += ", description</p>";
            resultElement = spoiledStart + element + spoiledEnd;
            mainBody.append(resultElement);
            history.append(resultElement);    
        } 
        history.append("<hr>");
    }
});

