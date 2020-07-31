let findTheOldest = function(persons) {
    const yearsLived = persons.sort(function(a, b) {
        if (a.yearOfDeath == null) {
            const now = new Date().getFullYear()
            a.yearOfDeath = now
        }
        const ageLast =  a.yearOfDeath - a.yearOfBirth
        const ageNext =  b.yearOfDeath - b.yearOfBirth
        console.log(ageLast)
        console.log(ageNext)
        return ageLast > ageNext ? -1 : 1;
    })

    return yearsLived[0]
}

module.exports = findTheOldest
