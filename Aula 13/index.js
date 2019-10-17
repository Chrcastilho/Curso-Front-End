window.addEventListener('load', function () {
    getPessoa().then(function (data) { return data.pessoas.forEach(function (pessoa) {
        var arrayContatos = [];
        if (Array.isArray(pessoa.contato)) {
            pessoa.contato.forEach(function (contato) {
                var newContato = new Contato(contato.tipo, contato.contato);
                arrayContatos.push(newContato);
            });
            var newPessoa = new Pessoa(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.nacionalidade, arrayContatos);
            addToOutputPerson(newPessoa);
        }
        else {
            alert('erro ao carregar contato das pessoas');
        }
    }); });
});
function getPessoa() {
    return fetch('http://localhost:3000/db.json').then(function (res) { return res.json(); });
}
// Classes
var Contato = /** @class */ (function () {
    function Contato(tipoContato, contato) {
        if (tipoContato === void 0) { tipoContato = 1; }
        if (contato === void 0) { contato = ''; }
        this.tipo = tipoContato;
        this.contato = contato;
    }
    Contato.prototype.getFormattedContact = function () {
        throw new Error("Method not implemented.");
    };
    Contato.prototype.isContactValid = function () {
        throw new Error("Method not implemented.");
    };
    return Contato;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade, nacionalidade, contato) {
        if (nome === void 0) { nome = ''; }
        if (sobrenome === void 0) { sobrenome = ''; }
        if (idade === void 0) { idade = null; }
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.nacionalidade = nacionalidade ? nacionalidade : 'Brasileiro';
        this.contato = contato ? contato : null;
    }
    Pessoa.prototype.getFullName = function () {
        return this.nome + " " + this.sobrenome;
    };
    return Pessoa;
}());
function add() {
    // ? Chamada para capturar valores do form e criar pessoa
    // const form = document.getElementsByTagName('form')[0];
    // let pessoa = getValue(form);
    var inputNome = document.getElementById('input-nome');
    var inputSobrenome = document.getElementById('input-sobrenome');
    var inputIdade = document.getElementById('input-idade');
    var inputNacionalidade = document.getElementById('input-nacionalidade');
    var selectTipoContato = document.getElementById('select-tipo-contato');
    var inputContato = document.getElementById('input-contato');
    var inputList = [];
    inputList.push(inputNome, inputSobrenome, inputIdade, inputNacionalidade, inputContato);
    if (inputNome.value && inputSobrenome.value && inputIdade.value) {
        var nacionalidade = inputNacionalidade.value ? inputNacionalidade.value : null;
        var contato = inputContato.value ? new Contato(+selectTipoContato.value, inputContato.value) : null;
        var arrContato = [];
        arrContato.push(contato);
        var newPessoa = new Pessoa(inputNome.value, inputSobrenome.value, +inputIdade.value, nacionalidade, arrContato);
        addToOutputPerson(newPessoa);
        clearForm(inputList, selectTipoContato);
    }
    else {
        alert("Preencha o nome, sobrenome e idade");
    }
}
function clearForm(inputList, select) {
    inputList.forEach(function (input) {
        input.value = '';
    });
    select.value = '1';
}
// ? PARA TRATAR DE FORMA GENÉRICA
// function getValue(form: HTMLFormElement): Pessoa {
//     let pessoa = new Pessoa();
//     let contato = new Contato();
//     for (let item of form) {
//         debugger;
//         if (item instanceof HTMLInputElement) {
//             let el = <HTMLInputElement>item;
//             let itemId = item.id.replace('input-', '');
//             let value = el.value;
//             Object.keys(pessoa).forEach((key) => {
//                 if (key.toLowerCase() === itemId.toLowerCase()) {
//                     pessoa[key] = value;
//                 }
//             });
//             Object.keys(contato).forEach((key) => {
//                 if (key.toLowerCase() === itemId.toLowerCase()) {
//                     contato[key] = value;
//                 }
//             });
//         } else if (item instanceof HTMLSelectElement) {
//             let el = <HTMLSelectElement>item;
//             let itemId = item.id.replace('select-', '').replace('-', '');
//             let value = el.value;
//             Object.keys(contato).forEach((key) => {
//                 if (key.toLowerCase() === itemId.toLowerCase()) {
//                     contato[key] = value;
//                 }
//             });
//         }
//     }
//     pessoa.contato = contato;
//     return pessoa;
// }
function addToOutputPerson(pessoa) {
    var outputPessoa = document.getElementById('output-pessoa');
    var template = "<span class=\"pessoa\">\n            <p id=\"nome-completo-" + pessoa.id + "\">" + pessoa.getFullName() + "</p>\n            <p id=\"idade-" + pessoa.id + "\">" + pessoa.idade + "</p>\n            <p id=\"nacionalidade-" + pessoa.id + "\">" + pessoa.nacionalidade + "</p>\n            <p id=\"contato-" + pessoa.id + "\">" + pessoa.contato[0].contato + "</p>\n        </span>";
    outputPessoa.innerHTML = outputPessoa.innerHTML + template;
}
// Enums
var TipoContato;
(function (TipoContato) {
    TipoContato[TipoContato["residencial"] = 1] = "residencial";
    TipoContato[TipoContato["comercial"] = 2] = "comercial";
})(TipoContato || (TipoContato = {}));
