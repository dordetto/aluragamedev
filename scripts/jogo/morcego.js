class Morcego extends Animacao{
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite, velocidade);

        this.yMinimo = height/2;
        this.yMaximo = altura + 10;
        this.ySubindo = true; 
    }

    move(multiplicador){
        this.x = this.x - (this.velocidade * multiplicador);

        if (this.x < -this.larguraSprite){
            this.x = width;
        }
 
        if (this.ySubindo) {
            this.y = this.y - 3;
        } else {            
            this.y = this.y + 3;
        }

        if (this.y < -this.yMaximo){
            this.ySubindo = false
        }

        if (this.y > this.yMinimo ){
            this.ySubindo = true
        }
     }
}