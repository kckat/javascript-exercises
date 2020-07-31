const getTheTitles = function(array) {
    const result = array.map(book => book.title)
    return result
}

module.exports = getTheTitles;
