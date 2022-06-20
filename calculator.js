function disply(val) {
    document.getElementById("output").value += val
}

function compute() {
    let x = document.getElementById("output").value
    let y = eval(x);
    document.getElementById("output").value = y
}

function ac() {
    let text = document.getElementById("output").value;
    text = text.slice(0, -1);
    document.getElementById('output').value = text;
}

function c() {
    document.getElementById("output").value = ""
}

function solve() {
    let exp = document.getElementById('output').value;
    let solu = eval(exp);
    document.getElementById('output').value = solu;
}

function percent() {
    num = document.getElementById('output').value;
    per = eval(num / 100);
    document.getElementById('output').value = per;
}