function rgbToHexa(vermelho, verde, azul) {
    const corDecimal = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
  
    const corVermelho = corDecimal(vermelho);
    const corVerde = corDecimal(verde);
    const corAzul = corDecimal(azul);
  
    return "#" + corVermelho + corVerde + corAzul;
  }
 console.log (rgbToHexa(50,175,104))
