function getValores() {
    var n1 = +document.getElementById("n1").value;
    var n2 = +document.getElementById("n2").value;
    var n3 = +document.getElementById("n3").value;
    return [n1, n2, n3]
}

function setDiplay(screen, value) {
    document.getElementById(screen).innerHTML = value;

}

function calcula(notas) {
    media = (notas[0] + notas[1] + notas[2]) / 3;
    var conceito = "";
    switch (true) {

        case media >= 9.0:
            conceito = "Conceito A";
            break;
        case (media >= 7.5) && (media < 9.0):
            conceito = "Conceito B"; break;
        case (media >= 6.0) && (media < 7.5):
            conceito = "Conceito C"; break;
        default:
            conceito = "Conceito D"; break;
    }
    setDiplay("nota", conceito);
}
function tabuada() {
    var saida = "";
    for (let i = 0; i <= 10; i++) {
        saida += "5 x " + i + "=" + (i * 5) + "<br>";
    }
    saida += "<br><br>"
    for (let i = 0; i <= 10; i++) {
        saida += "10 x " + i + "=" + (i * 10) + "<br>";
    }
    document.getElementById("tabuada").innerHTML = saida;
}

function alunosJson() {
    var alunos = {
        "aluno_1": {
            "nota_1": 4,
            "nota_2": 5,
            "nota_3": 7
        },
        "aluno_2": {
            "nota_1": 8,
            "nota_2": 9,
            "nota_3": 9
        },
        "aluno_3": {
            "nota_1": 6,
            "nota_2": 5,
            "nota_3": 6
        },
        "aluno_4": {
            "nota_1": 3,
            "nota_2": 5,
            "nota_3": 9
        },
        "aluno_5": {
            "nota_1": 9,
            "nota_2": 9,
            "nota_3": 9
        },
        "aluno_6": {
            "nota_1": 2,
            "nota_2": 9,
            "nota_3": 6
        },
        "aluno_7": {
            "nota_1": 1,
            "nota_2": 9,
            "nota_3": 8
        },
        "aluno_8": {
            "nota_1": 3,
            "nota_2": 4,
            "nota_3": 7
        },
        "aluno_9": {
            "nota_1": 2,
            "nota_2": 2,
            "nota_3": 6
        },
        "aluno_10": {
            "nota_1": 3,
            "nota_2": 4,
            "nota_3": 7
        },
        "aluno_11": {
            "nota_1": 9,
            "nota_2": 9,
            "nota_3": 9
        },
        "aluno_12": {
            "nota_1": 2,
            "nota_2": 5,
            "nota_3": 8
        }
    }
    saida = "";

    for (key in alunos) {
    var notas = [];
        for (val in alunos[key]) {
            notas.push(alunos[key][val]);
        }
    saida += calculaJson(notas) + "<br>";
    
}
document.getElementById("alunos").innerHTML = saida;
    }

function calculaJson(notas) {
    media = (notas[0] + notas[1] + notas[2]) / 3;
    var conceito = "";
    switch (true) {

        case media >= 9.0:
            conceito = "Conceito A";
            break;
        case (media >= 7.5) && (media < 9.0):
            conceito = "Conceito B"; break;
        case (media >= 6.0) && (media < 7.5):
            conceito = "Conceito C"; break;
        default:
            conceito = "Conceito D"; break;
    }
    return conceito;
}