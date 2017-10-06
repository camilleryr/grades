function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round((Math.random() * max) + 50);
    });
}

let randomScores = randomArray(50, 50)

console.log("Random Array of Scores")
console.log(randomScores)
console.log("")

// const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0
}

for (let i = 0; i < randomScores.length; i++) {
    
    switch(Math.floor((randomScores[i]-1)/10)) {
        case 9:
            grades.a += 1;
            break;
        case 8:
            grades.b += 1;
            break;
        case 7:
            grades.c += 1;
            break;
        case 6:
            grades.d += 1;
            break;
        default:
            grades.f += 1;
            break;
    }
}

//How many of each grade 

console.log("Occurances of each grade");
console.log(grades);
console.log("");


//Highest and lowest scores 
console.log("Highest Score");
console.log(randomScores.sort(((a, b) => a - b))[randomScores.length-1])
console.log("");

console.log("Lowest Score");
console.log(randomScores.sort(((a, b) => a - b))[0])
console.log("");

//Most and Least Common grades 
let incedencesOfLetterGrades = (Object.values(grades).sort((a, b) => a - b))

let highestNumberOfIncedencesOfLetterGrade = incedencesOfLetterGrades[0]

let lowestNumberOfIncedencesOfLetterGrade = incedencesOfLetterGrades[incedencesOfLetterGrades.length-1]

// console.log(highestNumberOfIncedencesOfLetterGrade)
// console.log(lowestNumberOfIncedencesOfLetterGrade)


let mostCommonLetterGrade = []
let leastCommonLetterGrade = []

for (key in grades) {
    if (grades[key] === highestNumberOfIncedencesOfLetterGrade) {
        mostCommonLetterGrade.push(key)
    } else if (grades[key] === lowestNumberOfIncedencesOfLetterGrade) {
        leastCommonLetterGrade.push(key)
    }
}

console.log("Most Common Letter Grade")
console.log(mostCommonLetterGrade)
console.log("");

console.log("Least Common Letter Grade")
console.log(leastCommonLetterGrade)
console.log("");


//Most and Least Common grades 
let scoreSet = Array.from(new Set(randomScores))

// console.log(scoreSet)

let incedencesOfGrades = []

for (var uniqueNumbers = 0; uniqueNumbers < scoreSet.length; uniqueNumbers++) {
    
    let counter = 0
    
    for (var individualScore = 0; individualScore < randomScores.length; individualScore++) {
        
        
        if (scoreSet[uniqueNumbers] === randomScores[individualScore]) {
            counter += 1
        }
        
        
    }
    
    incedencesOfGrades.push( {
        "score": scoreSet[uniqueNumbers],
        "quantity": counter
    })
}

let numberOfIncedencesPerGrade = []

for (var index = 0; index < incedencesOfGrades.length; index++) {
    numberOfIncedencesPerGrade.push(incedencesOfGrades[index].quantity)
    
}

// console.log(numberOfIncedencesPerGrade.sort((a, b) => a - b))

let leastCommon = []
let mostCommon = []

let lowestNumberOfIncedences = numberOfIncedencesPerGrade.sort((a, b) => a - b)[0]

let highestNumberOfIncedences = numberOfIncedencesPerGrade.sort((a, b) => a - b)[numberOfIncedencesPerGrade.length-1]

// console.log(numberOfIncedencesPerGrade)
// console.log(lowestNumberOfIncedences)
// console.log(highestNumberOfIncedences)

for (var index = 0; index < incedencesOfGrades.length; index++) {
    if (incedencesOfGrades[index].quantity === lowestNumberOfIncedences) {
        mostCommon.push(incedencesOfGrades[index].score)
    } else if (incedencesOfGrades[index].quantity === highestNumberOfIncedences) {
        leastCommon.push(incedencesOfGrades[index].score)
    }
}

console.log("Most Common Grades")
console.log(leastCommon)
console.log("");

console.log("Least Common Grades")
console.log(mostCommon)
console.log("");
