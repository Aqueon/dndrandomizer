$(document).ready(function (){
    let rumor_target = new Array();
    let rumor_gossip1 = new Array();
    let rumor_gossip2 = new Array();
    let rumor_source = new Array();

    $.get('./rumors/rumor_target.txt', data => rumor_target = data.split('\n'));
    $.get('./rumors/rumor_gossip1.txt', data => rumor_gossip1 = data.split('\n'));
    $.get('./rumors/rumor_gossip2.txt', data => rumor_gossip2 = data.split('\n'));
    $.get('./rumors/rumor_source.txt', data => rumor_source = data.split('\n'));

    $('#rumor_generator').on('click', GenerateRumor);
    let rumors_history_button = $('#rumors_history_show');
    rumors_history_button.on('click', () => {
        let rumor_history = $('#rumors_history');
        if (rumor_history.css("display") === "none") {
            rumor_history.css("display", "block");
            rumors_history_button.html('Hide history');
        } else {
            rumor_history.css("display", "none");
            rumors_history_button.html('Show history');
        }
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