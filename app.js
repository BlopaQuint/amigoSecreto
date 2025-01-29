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

function sortearAmigo() {
    if(amigos.length == 0) {
        alert("Não há nomes para sortear. Por favor, adicione os nomes dos amigos.")
    } else {
        let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        exibirAmigoSorteado(nomeSorteado);
    }
}

function exibirAmigoSorteado(nome) {
    let campoAmigoSorteado = document.getElementById("resultado");
    campoAmigoSorteado.innerHTML = `O seu amigo secreto é: ${nome}!`;
}