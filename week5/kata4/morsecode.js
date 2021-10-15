decodeMorse = function(morseCode){
    let splitMorse = morseCode.trim().split("   ");
    let result = "";
    for(let word of splitMorse) {
      let char = word.split(" ");
      for(let ch of char) {
        result += MORSE_CODE[ch];
      }
      result += " ";
    }
    return result.trim();
}