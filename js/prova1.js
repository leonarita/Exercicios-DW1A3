function cadastrar() {

    var desc = document.getElementById('description').value
    var val = document.getElementById('value').value

    if (desc === '' || desc.lenght < 3) {
        alert('Campo de descrição inválido...')
        return
    }
    else if(val === '' || parseFloat(val) < 1) {
        alert('Campo de valor inválido...')
        return
    }
    else {
        document.getElementById('tableContas').style += 'display: flex;'

        total++
        value += parseFloat(val)

        document.getElementById('countTotal').innerHTML = `Total de ${total} contas`
        document.getElementById('valueTotal').innerHTML = `R$${value}`

        document.getElementById('tableCount').innerHTML = `${total} contas`
        document.getElementById('tableTotal').innerHTML = `R$${value}`

        document.getElementById("tableContas").insertRow(linha).insertCell(0)
                .outerHTML = "<tr><td>" + desc + "</td><td>R$" + val + "</td></tr>"
        
        linha++
    }

    document.getElementById('description').value = ''
    document.getElementById('value').value = ''
}

var total = 0, value = 0, linha = 1