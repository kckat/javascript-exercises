const caesar = function(string, number) {
    const alphabet = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } 
    string = [...string]
    crypted = []

    for (let i = 0; i < string.length; i++){
       if (alphabet.lower.includes(string[i])){
        let lowKey = alphabet.lower.indexOf(string[i]) + number;
        if (lowKey < 0){
            lowKey += 26
        } else if (lowKey > 26) {
            lowKey = lowKey % 26
        } else if (lowKey == 26) {
            lowKey == 0
        }
        console.log(lowKey)
        crypted.push(alphabet.lower[lowKey])
    } else if (alphabet.upper.includes(string[i])) {
        let upKey = alphabet.upper.indexOf(string[i]) + number;
        if (upKey < 0){
            upKey += 26
        } else if (upKey > 26) {
            upKey = upKey % 26
        } else if (upKey == 26) {
            upKey = 0
        }
        crypted.push(alphabet.upper[upKey])
    } else {
        crypted.push(string[i])
    }
}
    crypted = crypted.join('')
    return crypted;

}

console.log(caesar('Z', 1))
module.exports = caesar
