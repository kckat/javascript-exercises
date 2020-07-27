const reverseString = function(string) {
    let newString = ""
    let stringArray = string.split("")
    let newStringArray = []
    for (let i=0; i < stringArray.length; i++){
        newStringArray.unshift(stringArray[i])
    }
    newString = newStringArray.join("")
    return newString
}


module.exports = reverseString