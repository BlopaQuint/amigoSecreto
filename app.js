let amigos = [];
let amigosDisponiveis = [];

function adicionarAmigo() {
    let amigo = document.querySelector("input").value;
    if (amigo == "") {
        alert(`Por favor, insira um nome no campo "Digite um nome" abaixo.`);
    } else {
        amigos.push(amigo);
        amigosDisponiveis.push(amigo);
    }
    limparCampo();
    adicionarNomeNaLista();
    console.log(amigos, amigosDisponiveis);
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
        return;
    }
    if (amigosDisponiveis.length == 0) {
        alert("Todos os nomes já foram sorteados! Reiniciando a lista para um novo sorteio.")
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        amigosDisponiveis = [];
        amigos = [];
        return;
    }
    let listaSorteados = Math.floor(Math.random() * amigosDisponiveis.length);
    let nomeSorteado = amigosDisponiveis.splice(listaSorteados, 1) [0];
    console.log(amigosDisponiveis);
    exibirAmigoSorteado(nomeSorteado);
    setTimeout(function() {
        document.getElementById("resultado").innerHTML = "LIMPANDO O NOME PARA O PRÓXIMO SORTEIO...";
    }, 4500);
    setTimeout(function() {
        document.getElementById("resultado").innerHTML = "";
    }, 7000);
}

function exibirAmigoSorteado(nome) {
    let campoAmigoSorteado = document.getElementById("resultado");
    campoAmigoSorteado.innerHTML = `Seu amigo secreto é ${nome} !`;
}