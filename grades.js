// Create an array of random numbers

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round((Math.random() * max) + 50);
    });
}

let randomScores = randomArray(50, 50)

console.log("Random Array of Scores")
console.log(randomScores)
console.log("")

const grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0
}

// Assign each score to a letter grade

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


//Highest and lowest scores with .sort()

console.log("Highest Score");
console.log(randomScores.sort(((a, b) => a - b))[randomScores.length-1])
console.log("");

console.log("Lowest Score");
console.log(randomScores.sort(((a, b) => a - b))[0])
console.log("");

//Most and Least Common grades

//Stip the # of occurances of each grade and sort to find the highest and lowest value

let incedencesOfLetterGrades = (Object.values(grades).sort((a, b) => a - b))

let highestNumberOfIncedencesOfLetterGrade = incedencesOfLetterGrades[0]

let lowestNumberOfIncedencesOfLetterGrade = incedencesOfLetterGrades[incedencesOfLetterGrades.length-1]

// console.log(highestNumberOfIncedencesOfLetterGrade)
// console.log(lowestNumberOfIncedencesOfLetterGrade)


let mostCommonLetterGrade = []
let leastCommonLetterGrade = []

// Iterate thought letter grades to find ones that match highest and lowest 

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

// Create an array of objects (score / num of occurances) 

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

// Create an array of just the number of incences per grade and sort them

let numberOfIncedencesPerGrade = []

for (var index = 0; index < incedencesOfGrades.length; index++) {
    numberOfIncedencesPerGrade.push(incedencesOfGrades[index].quantity)
    
}

let leastCommon = []
let mostCommon = []

let lowestNumberOfIncedences = numberOfIncedencesPerGrade.sort((a, b) => a - b)[0]

let highestNumberOfIncedences = numberOfIncedencesPerGrade.sort((a, b) => a - b)[numberOfIncedencesPerGrade.length-1]

// Compare original set of grades agains the highest and lowest number of incedences  

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
