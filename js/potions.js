$(document).ready(function (){

    $(document).on('click', '#potion_generator', GeneratePotion);
    $(document).on('click', '#potions_history_show', () => {
        $('#potions_history_modal').css('display', 'block');
    });

    $('#potions_history_modal').on('click', (e) => {
        if (!$(e.target).closest('#potions_history').length){
            $('#potions_history_modal').css('display', 'none');
        }
    });
    $('#potions_history_close').on('click', () => {
        $('#potions_history_modal').css('display', 'none');
    });

    $(document).on('click', '.potion_copy', (e) => {
        let sibling = $(e.target).siblings('p');
        let result = sibling.children('.potion_container').text() + " containing " + sibling.children('.potion_appearance').text().toLowerCase().substring(0, sibling.children('.potion_appearance').text().indexOf(" with")) + ", " + sibling.children('.potion_texture').text().toLowerCase() + " " + sibling.children('.potion_type').text().toLowerCase() + sibling.children('.potion_appearance').text().toLowerCase().substring(sibling.children('.potion_appearance').text().indexOf(" with")) + " which smells like " + sibling.children('.potion_smell').text().toLowerCase() + ". Label is " + sibling.children('.potion_label').text().toLowerCase();
        res = result.replace(/\n/g,'');
        let dummy = document.createElement("textarea");
        dummy.style.width = "0";
        dummy.style.height = "0";
        document.body.appendChild(dummy);
        dummy.value=res;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    });

    function GeneratePotion () {
        const quantity = $("#potion_quantity").val();
        let sideeffects = $("#potion_sideeffects").val();
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
            element = "<h4>Potion " + (i+1) + ":</h4><p>";
            let type = "<b>Type:</b> <span class=\"potion_type\">" + potion_type[Math.floor(Math.random() * potion_type.length)] + "</span><br>";
            let mainEffect = "<b>Main effect:</b> <span class=\"potion_mainEffect\">" + potion_mainEffect[Math.floor(Math.random() * potion_mainEffect.length)] + "</span><br>";
            let strength = "<b>Strength:</b> <span class=\"potion_strength\">" + potion_strength[Math.floor(Math.random() * potion_strength.length)] + "</span><br>";
            let sideEffect = "<b>Side effects:</b> <span class=\"potion_sideEffect\">";
            if (sideeffects > potion_sideEffect.length) sideeffects = potion_sideEffect.length;

            let tmpArray = potion_sideEffect;
            for (let j = 0; j < sideeffects; j++) {
                let tmp = tmpArray.splice(Math.floor(Math.random() * tmpArray.length), 1);
                sideEffect += tmp + ", ";
            }
            if (sideEffect !== "<b>Side effects:</b> <span class=\"potion_sideEffect\">") sideEffect = sideEffect.substring(0, sideEffect.length - 2);
            sideEffect += "</span><br>";
            let container = "<b>Container:</b> <span class=\"potion_container\">" + potion_container[Math.floor(Math.random() * potion_container.length)] + "</span><br>";
            let appearance = "<b>Appearance:</b> <span class=\"potion_appearance\">" + potion_appearance1[Math.floor(Math.random() * potion_appearance1.length)] + " with " + potion_appearance2[Math.floor(Math.random() * potion_appearance2.length)].toLowerCase() + "</span><br>";
            let texture = "<b>Texture:</b> <span class=\"potion_texture\">" + potion_texture[Math.floor(Math.random() * potion_texture.length)] + "</span><br>";
            let taste = "<b>Taste:</b> <span class=\"potion_taste\">" + potion_taste[Math.floor(Math.random() * potion_taste.length)] + "</span><br>";
            let smell = "<b>Smell:</b> <span class=\"potion_smell\">" + potion_taste[Math.floor(Math.random() * potion_taste.length)] + "</span><br>";
            let label = "<b>Label:</b> <span class=\"potion_label\">" + potion_label[Math.floor(Math.random() * potion_label.length)] + "</span></p>";
            let copy = "<button type=\"button\" class=\"potion_copy\">Copy to clipboard</button>";

            resultElement = spoiledStart + element + type + mainEffect + strength + sideEffect + container + appearance + texture + taste + smell + label + spoiledEnd + copy;
            mainBody.append("<div>" + resultElement + "</div>");
            history.append("<div>" + resultElement + "</div>");    
        } 
        history.append("<hr>");
    }
});

