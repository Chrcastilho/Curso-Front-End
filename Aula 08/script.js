function media(nota1, nota2, nota3) {
    var mediat = (nota1 + nota2 + nota3) / 3;
    var resultado = 'D';
    if (mediat >= 9) {
        resultado = 'A';
    }
    else if (mediat >= 7.5 && mediat < 9) {
        resultado = 'B';
    }
    else if (mediat >= 6 && mediat < 7.5) {
        resultado = 'C';
    }
    return resultado
}


var media = (nota1, nota2, nota3) => {
    mediat = (nota1 + nota2 + nota3) / 3;
    resultado = '';
    switch (mediat) {
        case mediat >= 9.0:
            resultado = 'A';
            break;
        case mediat >= 7.5:
            resultado = 'B';
            break;
        case mediat >= 6:
            resultado = 'C';
            break;
        default:
            resultado = 'D';
            break;
    }
    return resultado;
}