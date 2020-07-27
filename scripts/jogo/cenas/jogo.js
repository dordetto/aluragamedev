class Jogo {
    constructor() {
        this.inimigoAtual = 0;
    }

    setup() {
        cenario = new Cenario(imagemCenario, cenarioVelocidade);
        pontuacao = new Pontuacao(0);
        vida = new Vida(10);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 30, 120, 145, 220, 270);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width + 5, 30, 52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width + 5 + parseInt(random(2000, 2500)), 300, 100, 75, 200, 150, 17)
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width + 5 + parseInt(random(2000, 2500)), 0, 280, 280, 400, 400, 5)

        morcego = new Morcego(matrizMorcego, imagemMorcego, width + 550, parseInt(random(height, height / 5)), 90, 90, 32, 32, 15);

        inimigos.push(inimigo)
        inimigos.push(inimigoGrande)
        inimigos.push(inimigoVoador)

        somDoJogo.loop();
        somDoAmbiente.loop();
    }

    keyPressed() {
        if (key === 'ArrowUp' || key === 'Enter') {
            personagem.pula();
        }
    }

    draw() {
        cenario.exibe();
        pontuacao.exibe();
        vida.exibe();

        cenario.move(pontuacao.faseJogo());

        morcego.exibe();
        morcego.move(pontuacao.faseJogo());

        personagem.exibe();
        personagem.aplicaGravidade();

        inimigos.forEach(inimigos => {
            inimigos.exibe()

            inimigos.move(pontuacao.faseJogo())

            //inimigos.move(1)

            if (personagem.estaColidindo(inimigos)) {
                vida.removeVida(0.7 * pontuacao.faseJogo());
                somPerdendoPontos.play();
            }

            if (personagem.estaColidindo(morcego)) {
                pontuacao.adicionaPonto(1);
                vida.adicionaVida(0.5);
                somDoMorcegoCapturado.play();
            }
        })

        if ((vida.placar() <= 5) && (!(personagemVidaBaixa))) {
            somDoJogo.stop();
            somDoAmbiente.stop();
            somDoCoracao.loop();
            personagemVidaBaixa = true
        }

        if (vida.placar() >= 5 && personagemVidaBaixa) {
            personagemVidaBaixa = false
            somDoCoracao.stop()
            somDoJogo.loop()
            somDoAmbiente.loop()
        }

        //Fim do Jogo
        if (vida.placar() <= 0) {
            noLoop()
            image(imagemGaveOver, width / 2 - 200, height / 2);

            textAlign(CENTER)
            textSize(40);
            fill('#fff')
            text('Recarregue (F5) para tentar novamente!!!', width/2, height/6 * 5)

            somDoAmbiente.stop();
            somDoJogo.stop();
            somDoCoracao.fade(0, 5);

            //botao.draw();
            cenaAtual = "fim"
        }

        pontuacao.adicionaPonto(0.1); //Ao andar já ganha 0.1 de ponto - mostra somente inteiros

        //Testa se mudou de fase para mostrar na Tela nova fase
        if (faseJogo != pontuacao.faseJogo()) {
            if (frameCount > 0) {
                pontuacao.novaFase();
                frameCount--
            } else {
                frameCount = 120
                faseJogo = pontuacao.faseJogo()
            }
        }
    }

}