var num = 1;
var aaa;
var jjj;
var n = 1;
var m = 0;
var dice = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
var id = 100;

for (aaa = 0; aaa < 5; aaa++) {
    for (bb = 0; bb <= 9; bb++) {
        document.getElementById("board").innerHTML += "<div class='boardbox left' id='box" + id + "' ></div>"
        id--;
    }
    for (c = 0; c <= 9; c++) {
        document.getElementById("board").innerHTML += "<div class='boardbox right'id='box" + id + "'></div>"
        id--;
    }
}
document.getElementById("box" + num).innerHTML = "<img id='counter' class='img' src='https://static.thenounproject.com/png/108498-200.png'></img>"
var play = function() {
    num = 1;
    document.getElementById("board").style.visibility = "visible";
    document.getElementById("dice").style.visibility = "visible";
    document.getElementById("Play").style.visibility = "hidden";
    document.getElementById("dice").innerHTML = dice[1];
}
var random = function() {

    document.getElementById("dice").disabled = false;
    var dice = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    aaa = Math.ceil(Math.random() * 6);
    document.getElementById("dice").innerHTML = dice[aaa];
    if (n + aaa > 100) {
        aaa = 0;
    }
    d = 0;
    move()
}
var move = function() {
    document.getElementById("dice").disabled = true;
    t = setInterval(move2, 200)
}
var move2 = function() {
    n++;
    m++;
    if (m < (aaa) || m == (aaa)) {
        if (d == (aaa - 1)) {
            if (n == 4) {
                n = 39;
            } else if (n == 36) {
                n = 8;
            } else if (n == 30) {
                n = 12;
            } else if (n == 26) {
                n = 75;
            } else if (n == 33) {
                n = 52;
            } else if (n == 70) {
                n = 50;
            } else if (n == 99) {
                n = 42;
            } else if (n == 59) {
                n = 63;
            } else if (n == 86) {
                n = 57;
            } else if (n == 73) {
                n = 93;
            } else if (n == 100) {
                alert("You win");
                document.getElementById("Play").style.visibility = "visible";
                document.getElementById("dice").style.visibility = "hidden";
                n = 1;
            } else {
                n = n;
            }
        }
        var s = document.getElementById("counter");
        document.getElementById("box" + n).appendChild(s);
        d += 1;
    } else {
        m = 0;
        n -= 1;
        clearInterval(t);
        document.getElementById("dice").disabled = false;
    }
}