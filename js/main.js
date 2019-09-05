$(document).ready(function () {
    $("#nav_potions").on('click', loadPotionModule);
    $("#topnav_potions").on('click', loadPotionModule);

    $("#nav_rumors").on('click', loadRumorModule);
    $("#topnav_rumors").on('click', loadRumorModule);

    $("#nav_poisons").on('click', loadPoisonModule);
    $("#topnav_poisons").on('click', loadPoisonModule);

    function loadPotionModule () {
    
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

        if ($('#topnav_potions').hasClass("active")) {
            return;
        }
        $('.topnav button').removeClass("active");
        $('#topnav_potions').addClass("active");
        $.get('./potions.html', {}, data => {
            $("#root").html(data);
        });
    }

    function loadRumorModule () {

        $.get('./rumors/rumor_target.txt', data => rumor_target = data.split('\n'));
        $.get('./rumors/rumor_gossip1.txt', data => rumor_gossip1 = data.split('\n'));
        $.get('./rumors/rumor_gossip2.txt', data => rumor_gossip2 = data.split('\n'));
        $.get('./rumors/rumor_source.txt', data => rumor_source = data.split('\n'));

        if ($('#topnav_rumors').hasClass("active")) {
            return;
        }
        $('.topnav button').removeClass("active");
        $('#topnav_rumors').addClass("active");
        $.get('./rumors.html', {}, data => {
            $("#root").html(data);
        });
    }

    function loadPoisonModule () {
        if ($('#topnav_poisons').hasClass("active")) {
            return;
        }
        $('.topnav button').removeClass("active");
        $('#topnav_poisons').addClass("active");
        // $.get('./potions.html', {}, data => {
        //     $("#root").html(data);
        // });
    }
})