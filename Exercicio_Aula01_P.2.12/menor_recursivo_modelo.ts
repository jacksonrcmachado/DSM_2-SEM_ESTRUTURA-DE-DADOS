function menor_r(a: number[]): number {
    if (a.length == 1) {
        //Se caso base atingido, retornar valor abaixo
        return a[0];
    }
    // Dividir array ao meio e arredondar em caso de itens ímpar no array
    const meio = Math.floor(a.length / 2);
    // Chamada recursiva
    const metade_esq = a.slice(0, meio);
    const metade_dir = a.slice(meio, a.length);
    const menor_esq = menor_r(metade_esq);
    const menor_dir = menor_r(metade_dir);
    
    // Comparação final entre os arrays divididos
    if (menor_esq < menor_dir){
         return menor_esq
    }
    else{
        return menor_dir
    }
    
}

export {
    menor_r
}