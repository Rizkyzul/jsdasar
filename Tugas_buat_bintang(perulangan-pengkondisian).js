{
    var s = "";
    for (var i = 1; i < 10; i++) {
        for (var j = 10; j >= i; j--) {
            s += "";
        }
        for (var k = 1; k <= i; k++) {
            s += "*";
        }
        s += "\n";
    }
    return s;
}
console.log(s);
