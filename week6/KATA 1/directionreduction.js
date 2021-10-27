function dirReduc(arr){

    const opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    };

    if (arr && (arr.length == 0 || arr.length == 1)) {
        return arr;
    }

    for(let i = 0; i < arr.length - 1; i++){
        if (opposites[arr[i].toUpperCase()] == arr[i+1]) {
            arr.splice(i, 2);
        }
    }
    return arr;
}

module.exports = dirReduc;