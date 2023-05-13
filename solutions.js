// 1. Write a function named setAlarm that has two arguments.

// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
// The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.

    const employed = true;
    const vacationing = true;

const setAlarm = () => {
    if(employed === true){
        console.log (true);
    // } else if (employed === vacationing){
    // console.log()
    }
};
    setAlarm(true, true) // => returns false
    // setAlarm(false, false) // => returns false
    // setAlarm(false, true) // => returns false
    // setAlarm(true, false) // => returns true

      


    // ************************************************************** //

    // COUNT ODD NUMBERS
    // Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

    // oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
    
    // oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const oddNumberCount = (x) => {
        for (let i = 0; i < numbers.length; i++){
            if(numbers[i] % 2 !== 0) {
                console.log(numbers[i]);
                // console.log(numbers.filter(oddNumberCount([])))
            }
        }
        };
//         for (let i = 2; num > i; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//     return num > 1;
//     } 
//     console.log(numbers.filter(oddNumberCount));

oddNumberCount(7)
oddNumberCount()


//Disemvoweling Trolls
// Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

const troll = "This website is for losers!";
const removeVowels = troll.replace(/[aeiou]/gi, '') //using regex. The 'g' needs to be there in order to select all the vowels. if it's missing only the first vowel will be removed. The 'g' is the 'global regex'.

const trollsBeGone = () => {
//     for (let i=0; i < troll; i++) {
    console.log(removeVowels);
    }
// } 
trollsBeGone()

    
