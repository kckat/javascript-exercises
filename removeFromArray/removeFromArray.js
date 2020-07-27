const removeFromArray = function(...args) {
    let originalArray = args[0]
    let newArray = []
    originalArray.forEach(item => {
        if(!args.includes(item)){
            newArray.push(item)
        }
    });
    return newArray
}
console.log(removeFromArray([1, 2, 3, 4], 3, 2))

module.exports = removeFromArray
