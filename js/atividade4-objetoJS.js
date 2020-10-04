var items = []
var qntList = 0
var qntRows = 0

var car = {
    marca: 'Marca fera', 
    modelo: 'Modelo dos modelos', 
    anoFabricacao: '2020',
    preco: 200000
}

document.getElementById("car").innerHTML = `<h1 style="margin: 0;"> Marca: ${car.marca} </h1>`
    + `<p style="margin: 0;"> Modelo: ${car.modelo} </p>`
    + `<p style="margin: 0;"> Ano De Fabricação: ${car.anoFabricacao} </p>`
    + `<p style="margin: 0;"> Preço: R$${car.preco}</p>`

function saveItem() {

    var item = document.getElementById("item").value

    if(!item) {
        window.alert("Elemento inválido")
    }
    else {
        items.push(item)
        document.getElementById("item").value = ''
    }
}

function listItems() {
    for(let i=qntList; i<items.length; i++) {

        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.setAttribute("class", "itemList");

        li.appendChild(document.createTextNode(items[i]));
        ul.appendChild(li);
    }

    qntList = items.length
}

function createTable() {
    if(items.length === 0 || items.length % 2 !== 0) {
        window.alert("Precisa possuir um numero par de clubes")
    }
    else {
        var linha=0

        for(let i=qntRows; i<items.length; i+=2) {

            document.getElementById("tableClubs").insertRow(linha).insertCell(0)
                .outerHTML = "<th>" + items[i] + " X " + items[i+1] + "</th>"
         
            linha++
        }

        qntRows = items.length/2
    }
}

function generateReport() {
    var limitDate = document.getElementById("limitDate").value
    var price = document.getElementById("price").value

    var time = new Date(limitDate)
    time.setDate(time.getDate() + 90)

    document.getElementById("dataReport").innerHTML = "Data limite: " + (time.getDay()+1) + "/" + (time.getMonth()+1) + "/" + time.getFullYear()

    if(time > new Date()) {
        price = price - price * 20 / 100
    }

    document.getElementById("priceReport").innerHTML = "Preço: " + price
}

function calculatePrice() {
    if(document.getElementById("op1").checked)
        calculateOp1()
    else
        calculateOp2()
}

function calculateOp1 () {
    document.getElementById("result").innerHTML = `Preço: R$${car.preco - car.preco * 5/100}`
}

function calculateOp2 () {
    document.getElementById("result").innerHTML = `Preço de entrada: R$${car.preco / 2} <br> 12 parcelas de R$${car.preco / 24}`
}

