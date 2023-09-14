function isBetween(min, max) {
    return function(num) {
        return num >= min && num <= max
    }
}

const isMinor = isBetween(0, 18)
const isAdult = isBetween(19, 60)
const isSenior = isBetween(61, 130)

console.log(isMinor(17)) // deve retornar true
console.log(isMinor(19)) // deve retornar false
// etc...