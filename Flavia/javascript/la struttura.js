function change_mosaico(number) {
    for (i = 1; i <= $("#mosaico").children().length; i++)
        $("#zone" + i).removeClass().addClass("button_" + number.data.param1 + "_" + i)
            .attr({ src: "la struttura_foto/" + number.data.param1 + "/" + i + ".jpg" });

    for (i = 1; i <= $("#mosaico").children().length; i++)
        if (number.data.param1 == i)
            $("#button" + number.data.param1).addClass("colore_button_" + number.data.param1);
        else
            $("#button" + i).removeClass("colore_button_" + i);

}

function prenota() {
    alert("hai premuto prenota ora");
}