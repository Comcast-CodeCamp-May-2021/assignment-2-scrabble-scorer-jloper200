// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
// let word = "";
// let score = 0;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      letterPoints += Number(pointValue);
		 }
     
 
	  }
    
	}
  console.log(`Score for '${word}': ${letterPoints}\n`);
	return letterPoints;

 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.clear();
   let word = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
  //  score = vowelBonusScore(word);
  //  console.log(score);
  return word;

};

function simpleScore(word) {
  word = word.toUpperCase();
  let letterPoints = 0;
  for (i = 0; i < word.length; i++) {
    letterPoints++
  }
  console.log(`Score for '${word}': ${letterPoints}\n`);
  return letterPoints;

};

function vowelBonusScore(word) {
  word = word.toUpperCase();
  word = word.split("");
  let letterPoints = 0;
  // totalPoints = 0;
  // console.log(word);
  const vowels = ['A', 'E', 'I', 'O', 'U', 'W'];
  for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      // letterPoints += `Points for '${word[i]}': 3\n`;
      letterPoints = letterPoints + 3
    } else {
      // letterPoints += `Points for '${word[i]}': 1\n`;
      letterPoints++
    }
  }
  word = word.join('');
  console.log(`Score for '${word}': ${letterPoints}\n`);

  return letterPoints;
};

function scrabbleScore(word) {
  word = word.toUpperCase();
	let letterPoints = 0;
//  console.log(newPointStructure);
	for (let i = 0; i < word.length; i++) {
 
	  for (const letterKey in newPointStructure) {

      let points = [letterKey];
 
		 if (points.includes(word[i])) {
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      letterPoints += Number(newPointStructure[letterKey]);
		 }
     
 
	  }
    
	}
  console.log(`Score for '${word}': ${letterPoints}\n`);
	return letterPoints;
}

let simpleScoring = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
};

let vowelBonusScoring = {
  name: "Bonus Vowels",
  description: "Vowels are 3pts, consonants are 1pt.",
  scorerFunction: vowelBonusScore
};

let regularScoring = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer
};

const scoringAlgorithms = [regularScoring, simpleScoring, vowelBonusScoring];

function scorerPrompt() {
  let scoringSelection = input.question('Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ');
  // let score;

  // if (scoringSelection === '0') {
  //    score = simpleScore(word);
  //    console.log(score);
  //  } else if (scoringSelection === '1') {
  //    score = vowelBonusScore(word);
  //    console.log(score);
  //  } else {
  //    score = oldScrabbleScorer(word);
  //    console.log(score);
  //  }

  //  if (scoringSelection === '0') {
  //    console.log(simpleScore(word));
  //   //  console.log(score);
  //  } else if (scoringSelection === '1') {
  //    score = vowelBonusScore(word);
  //    console.log(score);
  //  } else {
  //    score = oldScrabbleScorer(word);
  //    console.log(score);
  //  }

  return scoringSelection;
  
}

function transform(object) {
  let flippedValues = {};
  for (let points in object) {
    let letters = object[points];
    for (let i = 0; i < letters.length; i++) {
      flippedValues[letters[i]] = points;
    }
  }
  return flippedValues;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  // let word;
  // let score;
  // let scoringSelection;
  // console.log("Did i break this?");

  let userWord = initialPrompt();

  //  initialPrompt();
   let selection = scorerPrompt();

   if (selection === '0') {
     score = simpleScore(userWord);
     console.log(score);
   } else if (selection === '1') {
     score = vowelBonusScore(userWord);
     console.log(score);
   } else {
     score = scrabbleScore(userWord);
     console.log(score);
   }


   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

