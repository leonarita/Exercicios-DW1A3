var pessoa = {}

function cadastrar() {

    const agora = new Date();

    pessoa.idade = parseInt((agora - new Date(pessoa.dataNascimento)) / (1000 * 60 * 60 * 24 * 365), 10);

    document.getElementById('nome').innerHTML = pessoa.name
    document.getElementById('reg').innerHTML = `CPF: ${pessoa.cpf}`
    document.getElementById('idade').innerHTML = `Idade: ${pessoa.idade}`
}

function validar() {

    pessoa.name = document.getElementById('name').value
    pessoa.cpf = document.getElementById('cpf').value.toString()
    pessoa.dataNascimento = document.getElementById('dataNascimento').value

    if (pessoa.name.lenght < 3 || pessoa.name.lenght > 30 || pessoa.name === "") {
        alert('Nome inválido')
        return 
    }
    else if (pessoa.cpf === "") {
        alert('CPF inválido')
        return 
    }
    else if (pessoa.dataNascimento === "") {
        alert('Data inválida')
        return 
    }
    else {
        cadastrar()
    }

}
