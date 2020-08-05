class TelaInicial {
    constructor(){
    }

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto(){
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        textSize(70);
        text('As aventuras da Bruxinha', width /2, height/4 )
        text('Marininha', width /2, height/4 + 50)

        textFont('Arial')
        textAlign(LEFT)
        textSize(20);
        text('Ajude a Bruxinha atravesar a floresta sem se contaminar!', 20, height/5 * 4)
        text('As gostas de choro do Troll são contaminadas, desvie!!!!', 20, height/5 * 4 + 20)
        text('A Vida diminui em contato com eles.', 20, height/5 * 4 + 40)
        text('Ganhe Vida coletando Morcegos', 20, height/5 * 4 + 60)
        text(`Pulo: Enter ou Up (aceita pulo duplo)`, 20, height/5 * 4 + 80)
    }

    _botao(){
        botao.draw()
    }
}