module.exports = function reverse(n) {
    let arr = n.toString().split('').reverse();
    while (arr[0] == 0) {
        arr.splice(0, 1);
    }
    if (arr[arr.length - 1] == '-') arr.splice(arr.length - 1, 1);

    return arr.join('');

};
