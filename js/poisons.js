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

    $(document).on('click', '.poison_copy', (e) => {
        let sibling = $(e.target).siblings('p');
        let result = "";
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

    function GeneratePoison () {
        const quantity = $('#poison_quantity').val();
        let mainBody = $('#poisons_results');
        let history = $('#poisons_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Poison " + (i+1) + ":</h4><p>";
            let effect = "<b>Effect:</b> <span class=\"poison_effect\">" + poison_effect[Math.floor(Math.random() * poison_effect.length)] + "</span><br>";
            let texture = "<b>Texture:</b> <span class=\"poison_texture\">" + poison_texture[Math.floor(Math.random() * poison_texture.length)] + "</span><br>";
            let color = "<b>Color:</b> <span class=\"poison_color\">" + poison_color[Math.floor(Math.random() * poison_color.length)] + "</span><br>";
            let mainIngredient = "<b>Main ingredient comes from:</b> <span class=\"poison_mainIngredient\">" + poison_mainIngredient[Math.floor(Math.random() * poison_mainIngredient.length)] + "</span><br>";
            let preparation = "<b>Preparation:</b> <span class=\"poison_preparation\">" +  poison_preparation[Math.floor(Math.random() * poison_preparation.length)] + "</span><br>";
            let serving = "<b>Best application:</b> <span class=\"poison_serving\">" + poison_serving[Math.floor(Math.random() * poison_serving.length)] + "</span></p>";
            let copy = "<button type=\"button\" class=\"poison_copy\">Copy to clipboard</button>";

            resultElement = element + effect + texture + color + mainIngredient + preparation + serving;
            mainBody.append(resultElement);
            history.append(resultElement); 
        }
        history.append("<hr>");
    }
})