let listaDeAmigos = [];


function adicionarAmigo() {
    let amigo = document.querySelector("input").value;
    if (amigo == "") {
        alert(`Por favor, insira um nome no campo "Digite um nome" abaixo.`);
    } else {
        listaDeAmigos.push(amigo);
    }
    limparCampo();
    console.log(listaDeAmigos);
}


function limparCampo() {
    amigo = document.querySelector("input");
    amigo.value = "";
}
