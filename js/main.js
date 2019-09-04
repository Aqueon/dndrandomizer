$(document).ready(function () {
    $("#nav_potions").on('click', loadPotionModule);
    $("#topnav_potions").on('click', loadPotionModule);

    $("#nav_rumors").on('click', loadRumorModule);
    $("#topnav_rumors").on('click', loadRumorModule);

    $("#nav_poisons").on('click', loadPoisonModule);
    $("#topnav_poisons").on('click', loadPoisonModule);

    function loadPotionModule () {
        $('.topnav button').removeClass("active");
        $('#topnav_potions').addClass("active");
        $.get('./potions.html', {}, data => {
            $("#root").html(data);
        });
    }

    function loadRumorModule () {
        $('.topnav button').removeClass("active");
        $('#topnav_rumors').addClass("active");
        // $.get('./potions.html', {}, data => {
        //     $("#root").html(data);
        // });
    }

    function loadPoisonModule () {
        $('.topnav button').removeClass("active");
        $('#topnav_poisons').addClass("active");
        // $.get('./potions.html', {}, data => {
        //     $("#root").html(data);
        // });
    }
})