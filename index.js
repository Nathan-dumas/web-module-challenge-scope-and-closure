// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *  counter1 is a variable and has a nested function, and a variable inside of the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  counter1 uses a closure. I can tell from the function within the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *  counter2 could be more useful when you don't want the counter to reset every time you call the function,
 *  where as with counter1 it will be.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/) {
  return Math.floor(Math.random() * Math.floor(3));
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(cb, num) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < num; i++) {
    home = home + cb(); away = away + cb();
  }
  return { "Home": home, "Away": away }
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
const getInningScore = function () {
  return {
    home: inning(),
    away: inning()
  }
};

function scoreboard(cb1, cb2, num) {
  let scorePerInning = [];
  let home = 0;
  let away = 0;
  for (let i = 0; i < num; i++) {
    const current = cb1(cb2);
    home = home + current.home;
    away = away + current.away;
    scorePerInning.push(`Inning ${i + 1}: Away ${current.away} - Home ${current.home}`);
  } if (home === away) {
    scorePerInning.push('Tie!');
  } else {
    scorePerInning.push(`Final score is away ${away}, home ${home}`)
  };
  return scorePerInning;
}

console.log(scoreboard(getInningScore, inning, 9));


