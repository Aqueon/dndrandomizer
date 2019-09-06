$(document).ready(function (){

    $(document).on('click', '#poison_generator', GeneratePoison);
    $(document).on('click', '#poisons_history_show', () => {
        $('#poisons_history_modal').css('display', 'block');
    });

    $('#poisons_history_modal').on('click', (e) => {
        if (!$(e.target).closest('#poisons_history').length){
            $('#poisons_history_modal').css('display', 'none');
        }
    });
    $('#poisons_history_close').on('click', () => {
        $('#poisons_history_modal').css('display', 'none');
    });

    function GeneratePoison () {
        const quantity = $('#poison_quantity').val();
        let mainBody = $('#poisons_results');
        let history = $('#poisons_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Poison " + (i+1) + ":</h4><p>";
            let effect = "<b>Effect:</b> " + poison_effect[Math.floor(Math.random() * poison_effect.length)] + "<br>";
            let texture = "<b>Texture:</b> " + poison_texture[Math.floor(Math.random() * poison_texture.length)] + "<br>";
            let color = "<b>Color:</b> " + poison_color[Math.floor(Math.random() * poison_color.length)] + "<br>";
            let mainIngredient = "<b>Main ingredient comes from:</b> " + poison_mainIngredient[Math.floor(Math.random() * poison_mainIngredient.length)] + "<br>";
            let preparation = "<b>Preparation:</b> " +  poison_preparation[Math.floor(Math.random() * poison_preparation.length)] + "<br>";
            let serving = "<b>Best application:</b> " + poison_serving[Math.floor(Math.random() * poison_serving.length)] + "</p>";

            resultElement = element + effect + texture + color + mainIngredient + preparation + serving;
            mainBody.append(resultElement);
            history.append(resultElement); 
        }
        history.append("<hr>");
    }
})