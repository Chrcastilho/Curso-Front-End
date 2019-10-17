window.addEventListener('load', () => {
    getPessoa().then((data) => data.pessoas.forEach((pessoa: Pessoa) => {        
        let arrayContatos: Contato[] = [];
        if(Array.isArray(pessoa.contato)) {
            pessoa.contato.forEach((contato: Contato) => {
                let newContato = new Contato(contato.tipo, contato.contato);        
                arrayContatos.push(newContato);
            });
            let newPessoa = new Pessoa(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.nacionalidade, arrayContatos);
            addToOutputPerson(newPessoa);
        } else {
            alert('erro ao carregar contato das pessoas');
        }
    }));
})

function getPessoa() {
    return fetch('http://localhost:3000/db.json').then(res => res.json());
}

// Classes
class Contato implements IContato {
    tipo: TipoContato;
    contato: string;

    constructor(tipoContato: TipoContato = 1, contato: string = '') {
        this.tipo = tipoContato;
        this.contato = contato;
    }

    getFormattedContact(): string {
        throw new Error("Method not implemented.");
    }

    isContactValid(): boolean {
        throw new Error("Method not implemented.");
    }

}

class Pessoa implements IPessoa {
    id: number;
    nome: string;
    sobrenome: string;
    idade: number;
    nacionalidade: string;

    contato: Contato[];

    constructor(nome: string, sobrenome: string, idade: number);
    constructor(nome: string, sobrenome: string, idade: number, nacionalidade: string);
    constructor(nome: string, sobrenome: string, idade: number, nacionalidade: string, contato: Contato[]);

    constructor(nome: string = '', sobrenome: string = '', idade: number = null, nacionalidade?: string, contato?: Contato[]) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.nacionalidade = nacionalidade ? nacionalidade : 'Brasileiro';
        this.contato = contato ? contato : null;
    }

    getFullName(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

function add() {

    // ? Chamada para capturar valores do form e criar pessoa
    // const form = document.getElementsByTagName('form')[0];
    // let pessoa = getValue(form);

    const inputNome = <HTMLInputElement>document.getElementById('input-nome');
    const inputSobrenome = <HTMLInputElement>document.getElementById('input-sobrenome');
    const inputIdade = <HTMLInputElement>document.getElementById('input-idade');
    const inputNacionalidade = <HTMLInputElement>document.getElementById('input-nacionalidade');
    const selectTipoContato = <HTMLSelectElement>document.getElementById('select-tipo-contato');
    const inputContato = <HTMLInputElement>document.getElementById('input-contato');

    const inputList: HTMLInputElement[] = [];
    inputList.push(inputNome, inputSobrenome, inputIdade, inputNacionalidade, inputContato);

    if (inputNome.value && inputSobrenome.value && inputIdade.value) {

        let nacionalidade = inputNacionalidade.value ? inputNacionalidade.value : null;
        let contato = inputContato.value ? new Contato(+selectTipoContato.value, inputContato.value) : null;

        let arrContato: Contato[] = [];
        arrContato.push(contato);

        let newPessoa = new Pessoa(inputNome.value, inputSobrenome.value, +inputIdade.value, nacionalidade, arrContato);

        addToOutputPerson(newPessoa);

        clearForm(inputList, selectTipoContato);

    } else {
        alert(`Preencha o nome, sobrenome e idade`);
    }
}

function clearForm(inputList: HTMLInputElement[], select: HTMLSelectElement) {
    inputList.forEach((input) => {
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

function addToOutputPerson(pessoa: Pessoa) {
    const outputPessoa = document.getElementById('output-pessoa');

    let template =
        `<span class="pessoa">
            <p id="nome-completo-${pessoa.id}">${pessoa.getFullName()}</p>
            <p id="idade-${pessoa.id}">${pessoa.idade}</p>
            <p id="nacionalidade-${pessoa.id}">${pessoa.nacionalidade}</p>
            <p id="contato-${pessoa.id}">${pessoa.contato[0].contato}</p>
        </span>`;

    outputPessoa.innerHTML = outputPessoa.innerHTML + template;
}

// Interfaces
interface IContato {
    tipo: number,
    contato: string,

    getFormattedContact(): string;
    isContactValid(): boolean;
}

interface IPessoa {
    nome: string,
    sobrenome: string,
    idade: number,
    nacionalidade: string;

    getFullName(): string;
}

// Enums
enum TipoContato {
    residencial = 1,
    comercial
}