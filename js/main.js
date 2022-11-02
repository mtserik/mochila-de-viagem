const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( (elemento) => { 
    criaElemento(elemento);
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual);

    nome.value = "";
    quantidade.value = "";

    itens.push(itemAtual);
    localStorage.setItem("itens", JSON.stringify(itens));
})

function criaElemento(objeto) {
    // <li class="item"><strong>7</strong>Camisa</li>
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numeroItem = document.createElement("strong");
    numeroItem.innerHTML = objeto.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += objeto.nome;

    lista.appendChild(novoItem);
}