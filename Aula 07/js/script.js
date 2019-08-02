var useequal = false;

var teste= 0;
teste++

function calculator(num) {
    toDisplay(getDisplay() + num);
}

function clean() {
    toDisplay(null);
}

function del() {
    var num = getDisplay();
    document.getElementById("display").value = num.substring(0, num.length - 1);
}

function signalmethod(signal) {
    var temp = getDisplay();
    //Troca de Sinal caso seja
    if (isNaN(temp.substring(temp.length-1, temp.length))) {
        temp = temp.substring(0, temp.length - 1) + signal;
        toDisplay(temp);
    }
    //Concatena 
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
    numtemp = getDisplay();
    if(numtemp != ""){
    var temp = stringExp(
        numtemp);
    toDisplay(Math.pow(temp, 2));}
}

function equal() {
    var num = getDisplay();
    if(num == ""){return;}
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

function toAssistance() {
    return document.getElementById("assistance").value;
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