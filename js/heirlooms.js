$(document).ready(function (){

    $(document).on('click', '#heirloom_generator', GenerateJunk);
    $(document).on('click', '#heirlooms_history_show', () => {
        $('#heirlooms_history_modal').css('display', 'block');
    });

    $('#heirlooms_history_modal').on('click', (e) => {
        if (!$(e.target).closest('#heirlooms_history').length){
            $('#heirlooms_history_modal').css('display', 'none');
        }
    });
    $('#heirlooms_history_close').on('click', () => {
        $('#heirlooms_history_modal').css('display', 'none');
    });

    function GenerateJunk () {
        const quantity = $('#heirloom_quantity').val();
        let mainBody = $('#heirlooms_results');
        let history = $('#heirlooms_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Heirloom " + (i+1) + ":</h4><p>";
            let category = heirloom_thing[Math.floor(Math.random() * heirloom_thing.length)].split(';');
            let thing = "<b>What:</b> " + category[0] + " - " + category[Math.floor(Math.random() * (category.length - 1)) + 1].toLowerCase() + "<br>";
            let owner = "<b>Once belonged to:</b> " + heirloom_owner[Math.floor(Math.random() * heirloom_owner.length)] + "<br>";
            let appearance = "<b>Looks:</b> It is made of " + heirloom_material[Math.floor(Math.random() * heirloom_material.length)].toLowerCase() + " and is adorned with " + heirloom_decorations[Math.floor(Math.random() * heirloom_decorations.length)].toLowerCase() + "<br>";
            let value = "<b>Value:</b> " + heirloom_value[Math.floor(Math.random() * heirloom_value.length)] + "<br>";
            let speciality = "<b>It is special because:</b> " + heirloom_speciality[Math.floor(Math.random() * heirloom_speciality.length)] + "</p>";

            resultElement = element + thing + owner + appearance + value + speciality;
            mainBody.append(resultElement);
            history.append(resultElement); 
        }
        history.append("<hr>");
    }
});