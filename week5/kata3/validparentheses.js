function validParentheses(parens){
    const open = "(";
    const close = ")";
    let openCounter = 0;
  
    console.log("input value is: '" + parens + "'");

    if (parens === '') {
      return true;
    }
    if (parens === null || parens.length <= 1 || parens[0] === close || parens[parens.length - 1] === open) {
        return false;
    }
    
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === open) {
            openCounter++;
        } else {
            openCounter--;
        }
      
        if (openCounter < 0) {
          return false;
        }
    }
    if (openCounter !== 0) {
      return false;
    }
    
    return true;
}

module.exports = validParentheses;
