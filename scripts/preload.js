function preload(){
    imagemTelaInicial = loadImage('imagens/cenario/telainicial.png');
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGaveOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
    imagemMorcego = loadImage('imagens/cenario/bat32x32.png');
  
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')

    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoAmbiente = loadSound('sons/natureAmbiance.mp3');
    somDoCoracao =  loadSound('sons/hearbeat.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDoMorcegoCapturado = loadSound('sons/mocegoCapturado2.wav')
    somPerdendoPontos = loadSound('sons/drop.wav')
  }
