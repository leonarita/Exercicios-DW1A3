function gerarRelatorio() {

    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var idade = parseInt(document.getElementById("idade").value)
    var nome = document.getElementById("nome").value

    var GEB

    if(document.getElementById("rbMasculino").checked) {
        GEB = 66 + (13.8 + peso) + (5 * altura) - (6,8 * idade)
    }
    else if (document.getElementById("rbFeminino").checked) {
        GEB = 655 + (9.6 + peso) + (1.9 * altura) - (4.7 * idade)
    }
    else {
        return
    }

    var total = document.getElementById("total");
    total.style = 'display: flex; flex-direction: column; flex-direction: column; align-items: center;'
    total.innerHTML = `<p>${nome}, seu GEB é de ${GEB}<p>`

    var IMC = parseFloat(peso / (altura * altura))

    if (IMC > 25) {
        total.innerHTML += `<p>Você precisa consumir ${GEB - 300} calorias para emagrecer<p>`
    }
}
