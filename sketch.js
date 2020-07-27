function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botao = new Botao('Iniciar', width/2, height/2);

  jogo.setup();
 
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
  }

}

function keyPressed() {
  jogo.keyPressed(key)
}

function touchStarted() {
  personagem.pula();
  return false;
}

function draw() {
  cenas[cenaAtual].draw();
}
