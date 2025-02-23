//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declaração da variável para armazenar os nomes dos amigos
let amigos = [];
let amigoSorteados = []; // Declaração do array para controlar os amigos sorteados

// Função para adicionar amigo à lista
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let amigo = document.getElementById("amigo").value.trim();

    // Validar se o campo de entrada não está vazio
    if (amigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array de amigos
    amigos.push(amigo);

    // Limpar o campo de entrada
    document.getElementById("amigo").value = "";

    // Atualizar a lista de amigos na interface
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array e adicionar cada nome como um <li> na lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para embaralhar a lista de amigos
function embaralharAmigos() {
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Troca os elementos
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verificar se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Embaralhar a lista de amigos antes de sortear
    embaralharAmigos();

    // Verificar se todos os amigos já foram sorteados
    if (amigoSorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados.");
        return; // Impede o sorteio de amigos após todos já terem sido sorteados
    }

    // Sortear um amigo (obter o próximo amigo não sorteado)
    let amigoSorteado;
    do {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigoSorteados.includes(amigoSorteado)); // Garantir que o amigo não foi sorteado

    // Adicionar o amigo sorteado à lista de amigos sorteados
    amigoSorteados.push(amigoSorteado);

    // Exibir o amigo sorteado
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
