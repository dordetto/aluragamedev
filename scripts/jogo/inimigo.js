class Inimigo extends Animacao{
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite, velocidade);
    }

    move(multiplicador){
        //multiplicador = multiplicador*3
        this.x = this.x - this.velocidade * multiplicador;

        if (this.x < -this.larguraSprite){
            this.x = width + random(150,1500);
        }
    }
}