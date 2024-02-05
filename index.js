var colors = ["blue", "orange", "red", "yellow"];
var currentColor = 0

function changeColor() {
    if (currentColor >= colors.length-1) {
        currentColor = 0;
    } else {
        currentColor++;
    }

    var elements = document.getElementsByClassName("grid-item");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colors[currentColor];
    }

    console.log("Color changed " + colors[currentColor]);
}