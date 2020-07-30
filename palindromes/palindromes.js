const palindromes = function(word) {
    palindrome = []
    word = word.toLowerCase()
    word = word.match(/\w+/g)
    word = word.join('')
    console.log(word)
    wordArray = [...word]
    wordArray.forEach(letter => {
        palindrome.unshift(letter)
    });
    palindrome = palindrome.join('')
    // console.log(palindrome + ':' + word)
    if(palindrome == word){
        return true;
    } else { return false }

}

console.log(palindromes('dOg, ooP'))

module.exports = palindromes
