const sumAll = function(min, max) {
    if (min <= 0 || max <= 0) {return "ERROR"}
    if (typeof(min) !== "number" || typeof(max) !== "number") {return "ERROR"}
    
    if (min > max){
        let tempA = min
        let tempB = max
        max = tempA
        min = tempB
    }
    finalSum = 0
    for(let i = min; i <= max; i++){
        finalSum += i
    }
    return finalSum
}

console.log(sumAll(123, 1))

module.exports = sumAll
