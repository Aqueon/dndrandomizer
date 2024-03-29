$(document).ready(function (){

    $(document).on('click', '#rumor_generator', GenerateRumor);
    $(document).on('click', '#rumors_history_show', () => {
        $('#rumors_history_modal').css('display', 'block');
    });

    $('#rumors_history_modal').on('click', (e) => {
        if (!$(e.target).closest('#rumors_history').length){
            $('#rumors_history_modal').css('display', 'none');
        }
    });
    $('#rumors_history_close').on('click', () => {
        $('#rumors_history_modal').css('display', 'none');
    });

    function GenerateRumor () {
        const quantity = $('#rumor_quantity').val();
        let mainBody = $('#rumors_results');
        let history = $('#rumors_history');

        mainBody.empty();
        for (let i = 0; i < quantity; i++) {
            let element = "<h4>Rumor " + (i+1) + ":</h4><p>";
            let target = "<b>Who:</b> " + rumor_target[Math.floor(Math.random() * rumor_target.length)] + "<br>";
            let gossip = "<b>What:</b> " + rumor_gossip1[Math.floor(Math.random() * rumor_gossip1.length)].replace("...", " " + rumor_gossip2[Math.floor(Math.random() * rumor_gossip2.length)].toLowerCase()) + "<br>";
            let source = "<b>Source:</b> " + rumor_source[Math.floor(Math.random() * rumor_source.length)] + "</p>";

            resultElement = element + target + gossip + source;
            mainBody.append(resultElement);
            history.append(resultElement); 
        }
        history.append("<hr>");
    }
});