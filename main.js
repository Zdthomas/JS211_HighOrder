
// Mapping


const numbers = [25, 45, 110, 90, 10];

const finalNumbers = numbers.map(numbers => numbers + 25)

console.log(finalNumbers)


// filter

const favoriteStuff = ['sword', 'ball', 'staff', 'carriage', 'potions'];


const longStuff = favoriteStuff.filter(word => {

    return word.length > 7

}

)

console.log(longStuff)