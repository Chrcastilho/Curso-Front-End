function adicionaItem() {
    var radioProcessador = document.getElementById('processador');
    var radioPlacaDeVideo = document.getElementById('placaDeVideo');
    var radioMemoria = document.getElementById('memoria');
    var radioPlacaMae = document.getElementById('placaMae');
    var lista = [];
    if (radioProcessador.checked) {
        var processador = new Processador();
        lista.push(processador);
        radioProcessador.checked = !radioProcessador.checked;
    }
    else if (radioPlacaDeVideo.checked) {
        var placaDeVideo = new PlacaDeVideo();
        lista.push(placaDeVideo);
        radioPlacaDeVideo.checked = !radioPlacaDeVideo.checked;
    }
    else if (radioMemoria.checked) {
        var memoria = new Memoria();
        lista.push(memoria);
        radioMemoria.checked = !radioMemoria.checked;
    }
    else if (radioPlacaMae.checked) {
        var placaMae = new PlacaMae();
        lista.push(placaMae);
        radioPlacaMae.checked = !radioPlacaMae.checked;
    }
    var divResult = document.getElementsByClassName('lista');
    console.log(divResult);
    divResult[0].innerHTML = JSON.stringify(lista);
    // const resultBox = <HTMLPreElement>document.getElementById('result-box');
    // resultBox.innerText = pessoa.getDados(); 
    // resultBox.style.display = resultBox.style.display === 'block' ? 'none' : 'block';
}
var Processador = /** @class */ (function () {
    function Processador(marca, modelo) {
        if (marca && modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
        this.valor = 500;
    }
    return Processador;
}());
var PlacaDeVideo = /** @class */ (function () {
    function PlacaDeVideo() {
        this.marca = 'Gigabyte';
        this.modelo = 'RTX 2080';
    }
    return PlacaDeVideo;
}());
var Memoria = /** @class */ (function () {
    function Memoria() {
        this.marca = 'Corsair';
        this.modelo = 'Vengeance';
        this.capacidade = 16;
    }
    return Memoria;
}());
var PlacaMae = /** @class */ (function () {
    function PlacaMae() {
        this.marca = 'Asus';
        this.modelo = '';
        this.chipset = 'z390';
    }
    return PlacaMae;
}());
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.nome = 'teste';
        this.nome = 'Gustavo',
            this.idade = 25;
        this.endereco = 'Rua Nilo Cairo, 489';
        this.telefone = '(44) 99701-7077';
    }
    Pessoa.prototype.getDados = function () {
        return this.nome + " qualquer texto " + this.endereco;
    };
    return Pessoa;
}());
