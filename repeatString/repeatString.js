const repeatString = function(string, numberOfRepeats) {
    let newString = ''
    if(numberOfRepeats < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < numberOfRepeats; i++){
            newString += string
        }
    }
    return newString
}

module.exports = repeatString
