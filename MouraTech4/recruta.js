function recruta(comandos) {
    let direcao = 'Norte'; // começa olhando para o Norte
  
    for (let i = 0; i < comandos.length; i++) {
      const comando = comandos[i];
  
      switch (comando) {
        case 'E':
          switch (direcao) {
            case 'Norte':
              direcao = 'Oeste';
              break;
            case 'Sul':
              direcao = 'Leste';
              break;
            case 'Leste':
              direcao = 'Norte';
              break;
            case 'Oeste':
              direcao = 'Sul';
              break;
          }
          break;
        case 'D':
          switch (direcao) {
            case 'Norte':
              direcao = 'Leste';
              break;
            case 'Sul':
              direcao = 'Oeste';
              break;
            case 'Leste':
              direcao = 'Sul';
              break;
            case 'Oeste':
              direcao = 'Norte';
              break;
          }
          break;
      }
    }
  
    return direcao
}