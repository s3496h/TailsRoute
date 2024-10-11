$(document).ready(function () {
    $(".message").click(function () {
        $(".message").addClass("tw-hidden");
        $(".message2").addClass("tw-hidden");
    });

    $(".message2").click(function () {
        $(".message").addClass("tw-hidden");
        $(".message2").addClass("tw-hidden");
    });
});