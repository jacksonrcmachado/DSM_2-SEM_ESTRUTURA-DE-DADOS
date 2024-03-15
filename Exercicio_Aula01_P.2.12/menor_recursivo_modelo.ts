function menor_r(a: number[]): number {
    if (a.length === 1) {
        return a[0];
    }
    const meio = Math.floor(a.length / 2);
    const metade_esq = a.slice(0, meio);
    const metade_dir = a.slice(meio);
    const menor_esq = menor_r(metade_esq)
    const menor_dir = menor_r(metade_dir)

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