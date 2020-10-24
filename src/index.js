module.exports = function reverse(n) {
    return Number(
        n.toString().split('').filter(
            n => !(Number.isNaN(Number(n))),
        ).reverse().join(''),
    );
};
