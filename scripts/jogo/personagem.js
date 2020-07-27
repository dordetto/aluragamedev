class Personagem extends Animacao{
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);
    
        this.altura = altura;
        this.yInicial = height - this.altura - y;
        this.y = this.yInicial;
        this.velocidadeDoPulo = 0;
        this.gravidade = 2;
        this.pulos = 0;
        this.lifeRegen = 10;
   }

    pula(){
        if(this.pulos < 2){
            this.velocidadeDoPulo = -(40 - (5 * pontuacao.faseJogo()));
            this.pulos++
            somDoPulo.play();
        }
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.y > this.yInicial){
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }

    estaColidindo(inimigo){
        const precisao = 0.7; //Usado para diminuir tamanho do retangulo para a colisao ocorrer mais perto
        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao)
        
        return colisao;
    }
}