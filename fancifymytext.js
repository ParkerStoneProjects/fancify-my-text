function bigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
    var textArea = document.getElementById("textInput");
    var isFancy = document.getElementById("fancyShmancy").checked;

    textArea.style.fontWeight = isFancy ? "bold" : "normal";
    textArea.style.color = isFancy ? "blue" : "black";
    textArea.style.textDecoration = isFancy ? "underline" : "none";
}

function moo() {
    var textArea = document.getElementById("textInput");
    var sentences = textArea.value.toUpperCase().split(".");

    // Add -Moo to the last word of each sentence ending with a period.
    for (var i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].replace(
            /(\S+)(\s*)$/,
            "$1-Moo$2"
        );
    }

    textArea.value = sentences.join(".");
}