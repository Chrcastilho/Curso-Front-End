var assistanceDisplay = [];

function calculator(num) {
    toDisplay(getDisplay() + num);
}

// Forma de construir a funcao

var clean = () => {
toDisplay(null);
}

// function clean() {
//     toDisplay(null);
// }

function del() {
    var num = getDisplay();
    document.getElementById("display").value = num.substring(0, num.length - 1);
}

function limpa() {
    assistanceDisplay = [];
    toAssistance(assistanceDisplay);
}

function signalmethod(signal) {
    var temp = getDisplay();
    //Troca de Sinal caso seja
    if (isNaN(temp.substring(temp.length - 1, temp.length))) {
        temp = temp.substring(0, temp.length - 1) + signal;
        toDisplay(temp);
    }
    //Concatena 
    else {
        temp = temp + signal;
        assistanceDisplay.push(temp);
        toAssistance(assistanceDisplay);
        toDisplay(temp);
    }
}

function exp() {
    temp = getDisplay();
    if (isNumber(temp)) toDisplay(Math.sqrt(temp))
}

function exponent() {
    numtemp = getDisplay();
    if (isNumber(numtemp)) {
        var temp = stringExp(
            numtemp);
        toDisplay(Math.pow(temp, 2));
    }
}

function oneoutof(){
    toDisplay(
        (1/(getDisplay()))
    )
}

function equal() {
    var num = getDisplay();
    var temp = stringExp(num);
    if (temp == 0) { toDisplay('') }
    else if (isNumber(temp)) toDisplay(temp);
}

function neGate() {
    var temp = -1 * getDisplay();
    if (isNumber(temp)) {
        toDisplay(temp);
    }
}

// Helpers

function toDisplay(val) {
    document.getElementById("display").value = val;
}

function toAssistance(val) {
    document.getElementById("assistance").value = val;
}

function getDisplay() {
    return document.getElementById("display").value;
}

function lastNumber(num) {
    return num.substring(num.length, num.length - 1);
}

function stringExp(exp) {
    try {
        return new Function('return ' + exp)();

    } catch (error) {

    }
}

function isNumber(temp) {
    Boolean = false;
    //Uso do try catch para assegurar que caso exista comparacao de um valor invalido nao estoure erro
    try {
        temp = stringExp(temp);
    } catch (error) {
    }

    if (((typeof temp) == 'number') && (!(isNaN(temp)))) {
        return Boolean = true;
    }
    return Boolean;
}

/*
Recursos usados:
Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
*/