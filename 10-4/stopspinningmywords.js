function spinWords(words) {
    var straight = "";
    var backward = words.split(" ");

    for(let i = 0; i < backward.length; i++) {
        if (i !== 0) {
            straight += " ";
        }
        if (backward[i].length >= 5) {
            straight += backward[i].split("").reverse().join("");
        } else {
            straight += backward[i];
        }
    }
    return straight;
}

module.exports = spinWords;