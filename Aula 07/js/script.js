var temp;
function calculadora(num) {
    temp = document.getElementById("display").value;
    document.getElementById("display").value = temp + num;
}

function clean() {
    document.getElementById("display").value = null;
    temp = null;
}

function add() {
    temp = document.getElementById("display").value;
    var lastnumber = temp.substr(temp.length - 1, temp.length);
    if (!(isNaN(lastnumber)) && lastnumber == null) {
        document.getElementById("display").value = temp + '+';
    }
}

function subtract() {
    temp = document.getElementById("display").value;
    
    if (!(isNaN(temp.substr(temp.length - 1, temp.length))) && (temp.substr(temp.length - 1, temp.length)) == null) {
        document.getElementById("display").value = temp + '-';
    }
}

function equal() {
    document.getElementById("display").value = temp;
}

function del() {
    temp = document.getElementById("display").value;
    document.getElementById("display").value = temp.substr(0, temp.length - 1);
}

function lastnumber(number) {
    var lastnumber = number.substr(number.length - 1, number.length);
    return lastnumber;
}