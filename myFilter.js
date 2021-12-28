Array.prototype.myFilter = function (callback) {
    const newArray = []

    for(let i=0; i < this.length; i++)
        if(callback(this[i])) // itera o array, verificando se a posição atual atende o "callback" (ex.: callback = x > 10)
            newArray.push(this[i]) // se atende, push no novo array

    return newArray // retorna o novo Array que contem apenas itens validados pelo callback
}