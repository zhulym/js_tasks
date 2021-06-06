$(document).ready(function () {
    $(".flip").click(function () {

        $(this).toggleClass('in').next().slideToggle();
        $('.flip').not(this).removeClass('in').next().slideUp();
    });
});