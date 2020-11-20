



$("document").ready(function() {

    var count = 0;

    $("#show").on("click",  function() {
        $("#fundo").show();
        count++;
        $("#lost").hide();
    });

    $(".wall").on("mouseleave",  function() {
        $("#fundo").hide();
        if (count >= 1 || count >= 5 ) {
            $("#lost").show();
        }
        if (count === 4) {
            $("#lost").html("Você Perdeu :/");
        }
        if (count === 5) {
            $("#lost").html("Você perdeu de novo :/");
        }
        if (count >= 6) {
            $("#lost").html("E de novo :/");
        }
        if (count === 8) {
            $("#lost").html("Por que ainda está tentando?");
        }
        if (count === 9) {
            $("#lost").html("Já tentou outra coisa??");
        }
        if (count >= 10) {
            $("#lost").html("Você Perdeu!!");
        }
        if (count === 13) {
            $("#lost").html("Eu não deveria te ajudar mas...");
        }
        if (count === 14) {
            $("#lost").html("Você já tentou...");
        }
        if (count === 15) {
            $("#lost").html("Trapacear??");
        }
        if (count >= 16) {
            $("#lost").html("...");
        }
    });

    $("#goal").on("click", function() {
        alert("Você Ganhou!!");
    })

});

function btn() {
    
}
