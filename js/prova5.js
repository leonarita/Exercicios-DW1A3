function inserirProduto() {

    var nomeUsuario = document.getElementById("nome").value
    localStorage.setItem('usuario', nomeUsuario)

    var prod = {}

    prod.nome = document.getElementById("produto").value
    prod.preco = document.getElementById("preco").value
    prod.desconto = document.getElementById("desconto").value
    prod.precoFinal = prod.preco - prod.preco * prod.desconto

    compras.push(prod)

    document.getElementById("produto").value = ''
    document.getElementById("preco").value = ''
    document.getElementById("desconto").value = ''
}

function listarCompra() {

    compras.map(produto => {

        var ul = document.getElementById("listaContas");
        var li = document.createElement("li");
        li.setAttribute("class", "itemList");
        li.innerHTML = `<h3>${produto.nome}</h3> <p>Preço: R$ ${produto.preco}</p> <p>Preço final: R$ ${produto.precoFinal}</p>`
        ul.appendChild(li);
    })
}

function limparCompra() {
    document.getElementById('listaContas').innerHTML = ''
    compras = []
}

var compras = []