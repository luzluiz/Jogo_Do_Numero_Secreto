//let titulo = document.querySelector("h1"); // selecionando h1 na variavel
//titulo.innerHTML = "Jogo do Numero Secreto"; // colocando texto dentro do html

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um Numero entre 1 e 10";
let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//CRIAMOS UMA FUNÇÃO PARA DIMINUIR O CODIGO 
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2}) //colocamos voz narrativa na pagina
}

function exibirMensagemInicial(){ //criado funcao para nao repetir codigo
exibirTextoNaTela("h1", "jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um Numero entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute(){  // criando a funcao para verificar o chute  
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = "Voce Descobriu o numero secreto com:  " + tentativas + " " +  palavraTentativa;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", "O numero secreto é menor");
        }else {
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
//    return parseInt(Math.random() * 10 + 1)
      let numeroEscolhido = parseInt(Math.random() * 10 + 1)
      if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
      } else{
        listaDeNumerosSorteados.push(numeroEscolhido); //adicionar item ao final da lista
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
      }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    //document.getElementById("reiniciar").setAttribute("disable", true);
}
