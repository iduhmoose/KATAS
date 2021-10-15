function pigIt(str){
    let result = "";
    if (!str) {
        return result;
    }

    let words = str.split(" ");

    for(let word of words) {
        if (word[0].match(/^[.,:!?]/)) {
            result += word[0] + " ";
        } else {
            for (let i = 1; i < word.length; i++) {
                result += word[i];
            }
            result += word[0] + "ay ";
        }
    }

    return result.trim();
}

module.exports = pigIt;