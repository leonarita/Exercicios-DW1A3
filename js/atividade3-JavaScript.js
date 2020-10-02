function calcularPreco() {
    var n1 = parseInt(window.document.getElementById('value').value)
    var n2 = parseInt(window.document.getElementById('kilo').value)

    if(n1 < 1 || n2 < 1){
        window.alert("Valor inválido")
        return;
    }

    window.document.getElementById('result').innerHTML = "Valor final: R$ " + (n1 * n2)
    window.alert(`Valor final: R$ ${n1 * n2}`)
}

function limparCampos() {

    // Limpa os conteúdos dos elementos
    document.getElementById("name").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("feminino").checked = false;
    document.getElementById("height").value = "";
    document.getElementById("resultWeight").textContent = "";
    
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
}

function calculateWeight() {
    var name = document.getElementById("name").value
    var height = document.getElementById("height").value
    var weight

    if(height < 0.2){
        window.alert("Valor inválido")
        return;
    }

    if(document.getElementById("masculino").checked) 
        weight = 22 * height * height
    else 
        weight = 21 * height * height

    document.getElementById("resultWeight").innerHTML = `${name}, seu peso ideal é ${weight}`
}

function calcularParquimetro() {
    var money = parseFloat(document.getElementById("money").value)

    if(money < 1) {
        window.alert("Valor insuficiente")
    }
    else {

        if(money < 1.75)
            document.getElementById("resultMoney").innerHTML = `Tempo: 30 min \n <br> Troco: R$ ${money - 1}` 
        else if(money < 3)
            document.getElementById("resultMoney").innerHTML = `Tempo: 60 min \n <br> Troco: R$ ${money - 1.75}` 
        else
            document.getElementById("resultMoney").innerHTML = `Tempo: 120 min \n <br> Troco: R$ ${money - 3}` 
    }

}

function calcularChimchilas() {
    var numerC = Number(document.getElementById("numberChinchilas").value)
    var numberY = Number(document.getElementById("numberYears").value)

    document.getElementById("resultChinchilas").innerHTML = ""

    if(numerC < 2 || isNaN(numerC) || numberY == 0 || isNaN(numberY)) {
        window.alert("Valor inválido")
        return;
    }
    else {
        for(let i=0; i<numberY; i++) {
            document.getElementById("resultChinchilas").innerHTML += `${i+1}º ano: ${numerC} Chinchilas\n <br>`
            numerC *= 3
        }
    }
}

var btLimpar = document.getElementById("btClean");
btLimpar.addEventListener("click", limparCampos);

var btLimpar = document.getElementById("btnCalculate");
btLimpar.addEventListener("click", calculateWeight);

    