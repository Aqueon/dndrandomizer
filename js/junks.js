$(document).ready(function (){

    $(document).on('click', '#junk_generator', GenerateJunk);
    $(document).on('click', '#junks_history_show', () => {
        $('#junks_history_modal').css('display', 'block');
    });

    $('#junks_history_modal').on('click', (e) => {
        if (!$(e.target).closest('#junks_history').length){
            $('#junks_history_modal').css('display', 'none');
        }
    });
    $('#junks_history_close').on('click', () => {
        $('#junks_history_modal').css('display', 'none');
    });

    function GenerateJunk () {
        const quantity = $('#junk_quantity').val();
        let mainBody = $('#junks_results');
        let history = $('#junks_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Junk " + (i+1) + ":</h4><p>";
            let description = "<b>What:</b> " + junk_description[Math.floor(Math.random() * junk_description.length)] + "</p>";

            resultElement = element + description;
            mainBody.append(resultElement);
            history.append(resultElement); 
        }
        history.append("<hr>");
    }
});