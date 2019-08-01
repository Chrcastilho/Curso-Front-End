var useequal = false;

function calculator(num) {
    toDisplay(document.getElementById("display").value + num);
}

function clean() {
    toDisplay(null);
}

function del() {
    var num = document.getElementById("display").value;
    document.getElementById("display").value = num.substring(0, num.length - 1);
}

function signalmethod(signal) {
    var temp = getDisplay();
    if (isNaN(temp.substring(temp.length-1, temp.length))) {
        temp = temp.substring(0, temp.length - 1) + signal;
        toDisplay(temp);
    }
    else{
        temp = temp+signal;
        toDisplay(temp);
    }
}

function exp() {
    var temp = stringExp(
        getDisplay());
    toDisplay(Math.exp(temp));
}

function exponent() {
    var temp = stringExp(
        getDisplay());
    toDisplay(Math.pow(temp, 2));
}

function equal() {
    var num = getDisplay();
    var temp = stringExp(num);
    toDisplay(temp);

}

function neGate() {
    var temp = -1 * getDisplay();
    if (temp != NaN) {
        toDisplay(temp);
    }
}

// Helpers

function toDisplay(val) {
    document.getElementById("display").value = val;
}

function getDisplay() {
    return document.getElementById("display").value;
}

function lastNumber(num) {
    return num.substring(num.length, num.length - 1);
}

function stringExp(exp) {
    return new Function('return ' + exp)();
}

/*
Recursos usados:
Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
*/