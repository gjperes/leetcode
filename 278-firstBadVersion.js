/**
 * Definição de isBadVersion()
 * 
 * @param {integer} version número
 * @return {boolean} valida se é uma versão válida
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total de versões
     * @return {integer} Primeira versão com erro
     */
    return function(n) {
        let max = n // recebe o total de versões (tamanho)
        let min = 1 // primeira versão é sempre de 1 em diante
        
        while(min < max){
            let half = Math.floor(min + (max - min) / 2)
            // busca binária
            if(isBadVersion(half))
                max = half
            else
                min = half + 1     
        }
        return min
    }
}