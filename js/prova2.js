function calcularParquimetro() {
    var money = document.getElementById("money").value
    var placa = document.getElementById("placa").value
    var tempo

    if(placa==="" || placa.lenght > 10 || placa.lenght < 5) {
        window.alert("Placa inválida")
        return
    }
    else if(parseFloat(money) < 1 || money==="") {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return
    }
    else {
        money = parseFloat(money)

        if(money < 1.75) {
            document.getElementById("resultMoney").innerHTML = `Tempo: 30 min \n <br> Troco: R$ ${money - 1}` 
            tempo = "30 minutos"
        }
        else if(money < 3) {
            document.getElementById("resultMoney").innerHTML = `Tempo: 60 min \n <br> Troco: R$ ${money - 1.75}` 
            tempo = "60 minutos"
        }
        else {
            document.getElementById("resultMoney").innerHTML = `Tempo: 120 min \n <br> Troco: R$ ${money - 3}` 
            tempo = "120 minutos"
        }

        dados = {
            placa,
            tempo
        }

        localStorage.setItem('carro', dados)
    }

}