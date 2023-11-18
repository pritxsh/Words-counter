let textarea = document.getElementById("textarea");
let char = document.getElementById("char");
let word = document.getElementById("word");

textarea.addEventListener("input", function () {
    var text = this.value;
    // for char count
    let charlength = text.length;
    char.innerHTML = charlength;

    // for words count
    //trim() removes the extra spaces
    let wordsinbox = text.trim().split(" ");
    let cleanlist = wordsinbox.filter(function (elm) {
        return elm != "";
    });
    word.innerHTML = cleanlist.length;

});