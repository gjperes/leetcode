Array.prototype.myMap = function (callback) {
    const newArray = []

    for(let i=0; i < this.length; i++) // itera o Array
        newArray.push(callback(this[i])) // executa o comando passado via parametro, em todos os itens do Array
    
    return newArray // retorna o novo Array, contendo os itens após tratamento
} 