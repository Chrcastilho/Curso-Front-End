
function adicionaItem() {

    const radioProcessador = <HTMLInputElement>document.getElementById('processador');
    const radioPlacaDeVideo = <HTMLInputElement>document.getElementById('placaDeVideo');
    const radioMemoria = <HTMLInputElement>document.getElementById('memoria');
    const radioPlacaMae = <HTMLInputElement>document.getElementById('placaMae');

    let lista = [];

    if (radioProcessador.checked) {
        let processador = new Processador();
        lista.push(processador);
        radioProcessador.checked = !radioProcessador.checked;
    } else if (radioPlacaDeVideo.checked) {
        let placaDeVideo = new PlacaDeVideo();
        lista.push(placaDeVideo);
        radioPlacaDeVideo.checked = !radioPlacaDeVideo.checked;
    } else if (radioMemoria.checked)  {
        let memoria = new Memoria();
        lista.push(memoria);
        radioMemoria.checked = !radioMemoria.checked;
    } else if (radioPlacaMae.checked) {
        let placaMae = new PlacaMae();
        lista.push(placaMae);
        radioPlacaMae.checked = !radioPlacaMae.checked;
    }

    const divResult = document.getElementsByClassName('lista');
    console.log(divResult);
    divResult[0].innerHTML = JSON.stringify(lista);

    // const resultBox = <HTMLPreElement>document.getElementById('result-box');
    // resultBox.innerText = pessoa.getDados(); 
    // resultBox.style.display = resultBox.style.display === 'block' ? 'none' : 'block';
}

class Processador {

    marca: string;
    modelo: string;
    valor: number;

    constructor();
    constructor(marca: string, modelo: string);
    constructor(marca?: string, modelo?: string) {
        if(marca && modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }

        this.valor = 500;
    }
}

class PlacaDeVideo {

    marca: string;
    modelo: string;w

    constructor() {
        this.marca = 'Gigabyte';
        this.modelo = 'RTX 2080';
    }
}

class Memoria {

    marca: string;
    modelo: string;
    capacidade: number;

    constructor() {
        this.marca = 'Corsair';
        this.modelo = 'Vengeance';
        this.capacidade = 16; 
    }
}

class PlacaMae {

    marca: string;
    modelo: string;
    chipset: string;

    constructor() {
        this.marca = 'Asus';
        this.modelo = '';
        this.chipset = 'z390';
    }
}

class Cliente {
    constructor() {

    }
}

class Pessoa {

    nome = 'teste';
    idade: number;
    endereco: string;
    telefone: string;
    
    constructor() {
        this.nome = 'Gustavo',
        this.idade = 25;
        this.endereco = 'Rua Nilo Cairo, 489';
        this.telefone = '(44) 99701-7077';
    }

    getDados() {
        return `${this.nome} qualquer texto ${this.endereco}`;
    }
}