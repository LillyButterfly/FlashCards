function revelarResposta(){
    //Retorna o primeiro elemento dentro do documento
    let resposta = document.querySelector("#resposta");

    //Efeito jQuery toggle para revelar e esconder
    resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta){
    let pergunta = document.querySelector("#cardcontainer");
    pergunta.innerHTML = "";

    //cria o elemento HTML especificado ou um HTMLUnknownElement
    let cardDiv = document.createElement("div");

    //adiciona uma ou mais classes ao elemento
    cardDiv.classList.add("card-perguntas", "animate__animated", "animate__backInRight")

    // define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes
    cardDiv.innerHTML = `
        <div class="container-pergunta">
            <h1 class="pergunta">O que é ${proximaPergunta.title}?</h1>
        </div>
        <div class="container-resposta blur" id="resposta">
            <p>${proximaPergunta.description}</p>
        </div>`;

   //O método appendChild() insere um novo nó na estrutura do DOM de um documento         
   pergunta.appendChild(cardDiv);

} 

function buscarInformacao(){
    /*fornece uma interface JavaScript para acessar e manipular partes 
    do pipeline HTTP, tais como os pedidos e respostas.*/
    fetch("https://flash.quickstaart.com/random")

    /*O método then() em JavaScript foi definido na API Promise e é usado 
    para lidar com tarefas assíncronas, como uma chamada de API */
    .then(function (resultado){
        return resultado.json();
    })
    .then(function (resultadoJson){
        proximaPergunta(resultadoJson);
    });
}

/*O objeto window representa uma janela que contém um elemento DOM
addEventListener () permite configurar funções 
a serem chamadas quando um evento especificado acontece */
window.addEventListener("load", buscarInformacao);