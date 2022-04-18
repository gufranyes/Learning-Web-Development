$("body").keypress(function (event) {
    $("h1").text(event.key);
})

$("button").on("click", function () {
    $("h1").slideToggle().animate({opacity: "50%"});
})