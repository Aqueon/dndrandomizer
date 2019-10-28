$(document).ready(function (){

    $(document).on('click', '#equipment_generator', () => {
        GenerateMelee();
        GenerateRanged();
        GenerateShield();
        GenerateArmor();
    });

    $(document).on('click', '#melee_generator', GenerateMelee);
    $(document).on('click', '#melees_history_show', () => {
        $('#melees_history_modal').css('display', 'block');
    });

    $('#melees_history_modal').on('click', e => {
        if (!$(e.target).closest('#melees_history').length){
            $('#melees_history_modal').css('display', 'none');
        }
    });
    $('#melees_history_close').on('click', () => {
        $('#melees_history_modal').css('display', 'none');
    });

    $(document).on('click', '#ranged_generator', GenerateRanged);
    $(document).on('click', '#rangeds_history_show', () => {
        $('#rangeds_history_modal').css('display', 'block');
    });

    $('#rangeds_history_modal').on('click', e => {
        if (!$(e.target).closest('#rangeds_history').length){
            $('#rangeds_history_modal').css('display', 'none');
        }
    });
    $('#rangeds_history_close').on('click', () => {
        $('#rangeds_history_modal').css('display', 'none');
    });

    $(document).on('click', '#shield_generator', GenerateShield);
    $(document).on('click', '#shields_history_show', () => {
        $('#shields_history_modal').css('display', 'block');
    });

    $('#shields_history_modal').on('click', e => {
        if (!$(e.target).closest('#shields_history').length){
            $('#shields_history_modal').css('display', 'none');
        }
    });
    $('#shields_history_close').on('click', () => {
        $('#shields_history_modal').css('display', 'none');
    });

    $(document).on('click', '#armor_generator', GenerateArmor);
    $(document).on('click', '#armors_history_show', () => {
        $('#armors_history_modal').css('display', 'block');
    });

    $('#armors_history_modal').on('click', e => {
        if (!$(e.target).closest('#armors_history').length){
            $('#armors_history_modal').css('display', 'none');
        }
    });
    $('#armors_history_close').on('click', () => {
        $('#armors_history_modal').css('display', 'none');
    });
    

    function GenerateMelee () {
        const quantity = $('#melee_quantity').val();
        let mainBody = $('#melees_results');
        let history = $('#melees_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Melee weapon " + (i+1) + ":</h4><p>";
            let type = "<b>Typ:</b> " + melee_types[Math.floor(Math.random() * melee_types.length)] + "<br>";
            let blade = "<b>Čepel:</b> " + melee_blades[Math.floor(Math.random() * melee_blades.length)] + "<br>";
            let hilt = "<b>Rukojeť:</b> " + melee_hilts[Math.floor(Math.random() * melee_hilts.length)] + "<br>";
            let style = "<b>Styl:</b> " + melee_styles[Math.floor(Math.random() * melee_styles.length)] + "<br>";
            let quality = "<b>Kvalita:</b> " + melee_qualities[Math.floor(Math.random() * melee_qualities.length)] + "<br>";
            let special = "<b>Speciální vlastnost:</b> " + melee_specials[Math.floor(Math.random() * melee_specials.length)] + "</p>";

            resultElement = element + type + blade + hilt + style + quality + special;
            mainBody.append(resultElement);
            history.append(resultElement);
        }
        history.append("<hr>");
    }

    function GenerateRanged () {
        const quantity = $('#ranged_quantity').val();
        let mainBody = $('#rangeds_results');
        let history = $('#rangeds_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Ranged weapon " + (i+1) + ":</h4><p>";
            let type = "<b>Typ:</b> " + ranged_types[Math.floor(Math.random() * ranged_types.length)] + "<br>";
            let material = "<b>Čepel:</b> " + ranged_materials[Math.floor(Math.random() * ranged_materials.length)] + "<br>";
            let handle = "<b>Rukojeť:</b> " + ranged_handles[Math.floor(Math.random() * ranged_handles.length)] + "<br>";
            let style = "<b>Styl:</b> " + ranged_styles[Math.floor(Math.random() * ranged_styles.length)] + "<br>";
            let quality = "<b>Kvalita:</b> " + ranged_qualities[Math.floor(Math.random() * ranged_qualities.length)] + "<br>";
            let special = "<b>Speciální vlastnost:</b> " + ranged_specials[Math.floor(Math.random() * ranged_specials.length)] + "</p>";

            resultElement = element + type + material + handle + style + quality + special;
            mainBody.append(resultElement);
            history.append(resultElement);
        }
        history.append("<hr>");
    }

    function GenerateShield () {
        const quantity = $('#shield_quantity').val();
        let mainBody = $('#shields_results');
        let history = $('#shields_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Shield " + (i+1) + ":</h4><p>";
            let shape = "<b>Tvar:</b> " + shield_shapes[Math.floor(Math.random() * shield_shapes.length)] + "<br>";
            let material = "<b>Materiál:</b> " + shield_materials[Math.floor(Math.random() * shield_materials.length)] + "<br>";
            let special = "<b>Speciální úprava:</b> " + shield_specials[Math.floor(Math.random() * shield_specials.length)] + "<br>";
            let pattern = "<b>Vzor:</b> " + shield_patterns[Math.floor(Math.random() * shield_patterns.length)] + "<br>";
            let category = shield_crests[Math.floor(Math.random() * shield_crests.length)].split(';');
            let crest = "";
            switch (category[0]) {
                case "Nic":
                    crest = "<b>Erb:</b> " + category[0] + "<br>";
                    break;
                case "Náboženský znak":
                    crest = "<b>Erb:</b> " + category[0] + " - " + category[Math.floor(Math.random() * (category.length - 1) + 1)] + "<br>";
                    break;
                default:
                    crest = "<b>Erb:</b> " + category[0] + " - " + category[Math.floor(Math.random() * (category.length - 1) + 1)].toLowerCase() + "<br>";
                    break;
            }
            let color = "<b>Barva:</b> " + shield_colors[Math.floor(Math.random() * shield_colors.length)] + "<br>";
            let protection = "<b>Extra ochrana:</b> " + shield_protections[Math.floor(Math.random() * shield_protections.length)] + "</p>";
            

            resultElement = element + shape + material + special + pattern + crest + color + protection;
            mainBody.append(resultElement);
            history.append(resultElement);
        }
        history.append("<hr>");
    }

    function GenerateArmor () {
        return;
    }
});