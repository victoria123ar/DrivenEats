let pratos = document.querySelectorAll(".prato");
let bebidas = document.querySelectorAll(".bebida");
let sobremesas = document.querySelectorAll(".sobremesa");

let pratoSelecionado = document.querySelector(".pratos .escolhido");
let bebidaSelecionada = document.querySelector(".bebidas .escolhido");
let sobremesaSelecionada = document.querySelector(".sobremesas .escolhido");
let pratoSelecionadoTexto = document.querySelector(".pratos .escolhido h1");
let pratoSelecionadoPreco = document.querySelector(".pratos .escolhido .visto");
let bebidaSelecionadaTexto = document.querySelector(".bebidas .escolhido h1");
let bebidaSelecionadaPreco = document.querySelector(
  ".bebidas .escolhido .visto"
);
let sobremesaSelecionadaTexto = document.querySelector(
  ".sobremesas .escolhido h1"
);
let sobremesaSelecionadaPreco = document.querySelector(
  ".sobremesas .escolhido .visto"
);
let nome;
let endereço;
let total;

function selecionarPrato(prato) {
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("escolhido");
  }

  prato.classList.add("escolhido");
  pratoSelecionado = document.querySelector(".pratos .escolhido");
  habilitarBotao();
}

function selecionarBebida(bebida) {
  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("escolhido");
  }

  bebida.classList.add("escolhido");
  bebidaSelecionada = document.querySelector(".bebidas .escolhido");
  habilitarBotao();
}

function selecionarSobremesa(sobremesa) {
  if (sobremesaSelecionada != null) {
    sobremesaSelecionada.classList.remove("escolhido");
  }

  sobremesa.classList.add("escolhido");
  sobremesaSelecionada = document.querySelector(".sobremesas .escolhido");
  habilitarBotao();
}

function habilitarBotao() {
  let botao = document.querySelector(".botao");
  botao.disabled = true;
  if (
    pratoSelecionado != null &&
    bebidaSelecionada != null &&
    sobremesaSelecionada != null
  ) {
    botao.innerHTML = `Finalizar pedido`;
    botao.classList.add("ativado");
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function fecharPedido() {
  nome = prompt("Qual o seu nome?");
  endereço = prompt("Qual o endereço completo para entrega?");
  let pedido = document.querySelector(".container");
  let tela = document.querySelector(".tela");
  let botao = document.querySelector("footer");

  pedido.classList.remove("escondido");
  botao.classList.add("escondido");
  tela.classList.add("desfoco");

  pratoSelecionadoTexto = document.querySelector(
    ".pratos .escolhido h1"
  ).textContent;
  pratoSelecionadoPreco = document.querySelector(
    ".pratos .escolhido .visto"
  ).textContent;
  bebidaSelecionadaTexto = document.querySelector(
    ".bebidas .escolhido h1"
  ).textContent;
  bebidaSelecionadaPreco = document.querySelector(
    ".bebidas .escolhido .visto"
  ).textContent;
  sobremesaSelecionadaTexto = document.querySelector(
    ".sobremesas .escolhido h1"
  ).textContent;
  sobremesaSelecionadaPreco = document.querySelector(
    ".sobremesas .escolhido .visto"
  ).textContent;

  somar();
  item = `<div class="pedido">
    <h1>Confirme seu pedido</h1>
    <div class='pratoSelecionado'><p>${pratoSelecionadoTexto}</p><p>${pratoSelecionadoPreco}</p></div>
    <div class='bebidaSelecionada'><p>${bebidaSelecionadaTexto}</p><p>${bebidaSelecionadaPreco}</p></div>
    <div class='sobremesaSelecionada'><p>${sobremesaSelecionadaTexto}</p><p>${sobremesaSelecionadaPreco}</p></div>
    <div class='total'><span>TOTAL</span><strong>R$ ${total}</strong></div>
    <div class='botoes'>
    <button class='certo' onclick="enviarPedido()">Tudo certo, pode pedir!</button>
    <button class='cancelar' onclick="cancelar()">Cancelar</button>
    </div>
    </div>`;

  pedido.innerHTML += item;
}

function somar() {
  let sobremesaSelecionada1 = sobremesaSelecionadaPreco.replace(",", ".");
  let bebidaSelecionada1 = bebidaSelecionadaPreco.replace(",", ".");
  let pratoSelecionado1 = pratoSelecionadoPreco.replace(",", ".");
  let pratoSelecionado2 = pratoSelecionado1.replace("R$", "");
  let bebidaSelecionada2 = bebidaSelecionada1.replace("R$", "");
  let sobremesaSelecionada2 = sobremesaSelecionada1.replace("R$", "");

  let soma =
    Number(pratoSelecionado2) +
    Number(bebidaSelecionada2) +
    Number(sobremesaSelecionada2);
  let soma2 = soma.toFixed(2);
  total = soma2.replace(".", ",");
}

function enviarPedido() {
  let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoSelecionadoTexto}
    - Bebida: ${bebidaSelecionadaTexto}
    - Sobremesa: ${sobremesaSelecionadaTexto}
    Total: R$ ${total}
    
    Nome: ${nome}
    Endereço: ${endereço}`;

  mensagem = encodeURIComponent(mensagem);

  const link = `https://wa.me/7591078928?text=${mensagem}`;

  window.open(link);
  console.log("enviarPedido" + pratoSelecionadoTexto);
  console.log("enviarPedido" + bebidaSelecionadaTexto);
  console.log("enviarPedido" + sobremesaSelecionadaTexto);
  console.log(nome);
  console.log(endereço);
  console.log(mensagem);
}

function cancelar() {
  let pedido = document.querySelector(".container");
  let tela = document.querySelector(".tela");
  let botao = document.querySelector("footer");

  pedido.classList.add("escondido");
  botao.classList.remove("escondido");
  tela.classList.remove("desfoco");
  pedido.innerHTML = "";
  pratos.disabled = false;
  bebidas.disabled = false;
  sobremesas.disabled = false;
}
