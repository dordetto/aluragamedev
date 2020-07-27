class Cenario{
    constructor(imagem, velocidade){
    this.image = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
    }
  
    exibe(){
      image(this.image, this.x1, 0, width, height);
      image(this.image, this.x2, 0, width, height);
    }
  
    move(multiplicador){
      this.x1 = this.x1 - this.velocidade * multiplicador;
      this.x2 = this.x2 - this.velocidade * multiplicador;
  
      if (this.x1 < -width){
        this.x1 = width;
      }
      if (this.x2 < -width){
        this.x2 = width;
      }
    }
  }