function dirReduc(arr){
    const N = "NORTH";
    const S = "SOUTH";
    const E = "EAST";
    const W = "WEST";
    if (arr && (arr.length == 0 || arr.length == 1)) {
        return arr;
    }

    for(let i = 0; i < arr.length - 1; i++){
        if ((arr[i].toUpperCase() == N && arr[i+1].toUpperCase() == S) ||
            (arr[i].toUpperCase() == S && arr[i+1].toUpperCase() == N) ||
            (arr[i].toUpperCase() == W && arr[i+1].toUpperCase() == E) ||
            (arr[i].toUpperCase() == E && arr[i+1].toUpperCase() == W)) {
                console.log('SPLICING');
            arr.splice(i, 2);
        }
    }
    return arr;
}

module.exports = dirReduc;