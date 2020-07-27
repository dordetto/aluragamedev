class Vida {
    constructor(pontosExtras) {
        this.pontos = 10
    }

    exibe() {
        textAlign(RIGHT)
        fill('#fff')
        textSize(50)
        text('Vida: ' + parseInt(this.pontos), width - 30, 100)
    }

    removeVida(pontos) {
        if (this.pontos > 0) {
            this.pontos = this.pontos - pontos;
        }
    }

    adicionaVida(pontos) {
        if (this.pontos < 50) {
            this.pontos = this.pontos + pontos;
        }
    }

    placar() {
        return this.pontos
    }

    reinicio(){
        this.pontos = 10
    }
}