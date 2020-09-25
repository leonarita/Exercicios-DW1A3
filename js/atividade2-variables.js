function somar() {
    var n1 = parseInt(window.document.getElementById('n1').value)
    var n2 = parseInt(window.document.getElementById('n2').value)
    window.alert( `A soma vale ${n1 + n2}`)
}

function calcularFatorial() {
    var n = parseInt(window.document.getElementById("n").value)

    if(n<1) {
        window.alert("Não é possível calcular fatorial de número negativo")
        }
    else {
        var fat=1, temp = n

        while(temp!=1) {
            fat *= temp
            temp--
        }        

        window.alert(`O fatorial de ${n} é ${fat}`)
    }   
}