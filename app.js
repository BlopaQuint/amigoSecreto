let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector("input").value;
    if (amigo == "") {
        alert(`Por favor, insira um nome no campo "Digite um nome" abaixo.`);
    } else {
        amigos.push(amigo);
    }
    limparCampo();
    adicionarNomeNaLista();
    console.log(amigos);
}

function limparCampo() {
    let amigo = document.querySelector("input");
    amigo.value = "";
}

function adicionarNomeNaLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let exibirNome = 0; exibirNome < amigos.length; exibirNome++) {
        lista.innerHTML += `<li>${amigos[exibirNome]}</li>`;
    }
}