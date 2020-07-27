class Pontuacao {
    constructor() {
        this.pontos = 0
    }

    exibe() {
        textAlign(RIGHT)
        fill('#fff')
        textSize(50)
        text('Pontos: ' + parseInt(this.pontos), width - 30, 50)
    }

    adicionaPonto(pontosExtras) {
        this.pontos = this.pontos + pontosExtras;
    }

    faseJogo() {
        return (parseInt(this.pontos / 150)) + 1
    }

    novaFase() {
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        textSize(50);
        fill('#fff')
        text('Fase ' + pontuacao.faseJogo(), width / 2, height / 2)
    }

    reinicio(){
        this.pontos = 0
    }
}