$(document).ready(function () {
    $("#nav_potions").on('click', loadPotionModule);
    $("#topnav_potions").on('click', loadPotionModule);

    $("#nav_rumors").on('click', loadRumorModule);
    $("#topnav_rumors").on('click', loadRumorModule);

    $("#nav_poisons").on('click', loadPoisonModule);
    $("#topnav_poisons").on('click', loadPoisonModule);

    $("#nav_junks").on('click', loadJunkModule);
    $("#topnav_junks").on('click', loadJunkModule);

    $("#nav_heirlooms").on('click', loadHeirloomModule);
    $("#topnav_heirlooms").on('click', loadHeirloomModule);

    function loadPotionModule () {
        $.get('./potions/' + language + '/potion_type.txt', data => potion_type = data.split('\n'));    
        $.get('./potions/' + language + '/potion_mainEffect.txt', data =>potion_mainEffect = data.split('\n'));
        $.get('./potions/' + language + '/potion_strength.txt', data => potion_strength = data.split('\n'));
        $.get('./potions/' + language + '/potion_sideEffect.txt', data => potion_sideEffect = data.split('\n'));
        $.get('./potions/' + language + '/potion_container.txt', data => potion_container = data.split('\n'));
        $.get('./potions/' + language + '/potion_appearance1.txt', data => potion_appearance1 = data.split('\n'));
        $.get('./potions/' + language + '/potion_appearance2.txt', data => potion_appearance2 = data.split('\n'));
        $.get('./potions/' + language + '/potion_texture.txt', data => potion_texture = data.split('\n'));
        $.get('./potions/' + language + '/potion_taste.txt', data => potion_taste = data.split('\n'));
        $.get('./potions/' + language + '/potion_label.txt', data => potion_label = data.split('\n'));

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
        let language = "en";
        $.get('./rumors/' + language + '/rumor_target.txt', data => rumor_target = data.split('\n'));
        $.get('./rumors/' + language + '/rumor_gossip1.txt', data => rumor_gossip1 = data.split('\n'));
        $.get('./rumors/' + language + '/rumor_gossip2.txt', data => rumor_gossip2 = data.split('\n'));
        $.get('./rumors/' + language + '/rumor_source.txt', data => rumor_source = data.split('\n'));

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
        let language = "en";
        $.get('./poisons/' + language + '/poison_color.txt', data => poison_color = data.split('\n'));
        $.get('./poisons/' + language + '/poison_effect.txt', data => poison_effect = data.split('\n'));
        $.get('./poisons/' + language + '/poison_mainIngredient.txt', data => poison_mainIngredient = data.split('\n'));
        $.get('./poisons/' + language + '/poison_preparation.txt', data => poison_preparation = data.split('\n'));
        $.get('./poisons/' + language + '/poison_serving.txt', data => poison_serving = data.split('\n'));
        $.get('./poisons/' + language + '/poison_texture.txt', data => poison_texture = data.split('\n'));

        if ($('#topnav_poisons').hasClass("active")) {
            return;
        }
        $('.topnav button').removeClass("active");
        $('#topnav_poisons').addClass("active");
        $.get('./poisons.html', {}, data => {
            $("#root").html(data);
        });
    }

    function loadJunkModule () {
        let language = "en";
        $.get('./junks/' + language + '/junk_description.txt', data => junk_description = data.split('\n'));

        if ($('#topnav_junks').hasClass("active")) {
            return;
        }
        $('.topnav button').removeClass("active");
        $('#topnav_junks').addClass("active");
        $.get('./junks.html', {}, data => {
            $("#root").html(data);
        });
    }

    function loadHeirloomModule () {
        let language = "en";
        $.get('./heirlooms/' + language + '/heirloom_decorations.txt', data => heirloom_decorations = data.split('\n'));
        $.get('./heirlooms/' + language + '/heirloom_material.txt', data => heirloom_material = data.split('\n'));
        $.get('./heirlooms/' + language + '/heirloom_owner.txt', data => heirloom_owner = data.split('\n'));
        $.get('./heirlooms/' + language + '/heirloom_speciality.txt', data => heirloom_speciality = data.split('\n'));
        $.get('./heirlooms/' + language + '/heirloom_thing.txt', data => heirloom_thing = data.split('\n'));
        $.get('./heirlooms/' + language + '/heirloom_value.txt', data => heirloom_value = data.split('\n'));

        if ($('#topnav_heirlooms').hasClass("active")) {
            return;
        }
        $('.topnav button').removeClass("active");
        $('#topnav_heirlooms').addClass("active");
        $.get('./heirlooms.html', {}, data => {
            $("#root").html(data);
        });
    }
})