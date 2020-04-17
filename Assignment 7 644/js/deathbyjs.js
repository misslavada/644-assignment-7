/*eslint-env browser*/

//STEP 1
// let step1 = 'quarantinesucks';
// mental = Array.from(step1);
// sort = mental.sort();
// console.log(sort.toString());

//STEP 2 - not sure what's happening here but I'm outta time
// let step2 = prompt('Enter a phrase:');
// function capLetter(step2) {
//     let step2b = step2.toLowerCase().split(' ');
//     console.log(step2b);
//     for (let i = 0; i < step2b.length; i++) {
//        step2b[i] = step2b[i].charAt(0).toUpperCase + step2b[i].substring(1);
//     } 
//     return step2b.join(' ');
// }
// console.log(capLetter(step2));

//STEP 3
// let step3 = prompt('Put some words here , mate:');
// let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
// let numOfVowels = 0;
// function counter(text) {
//     for (let letter of text.toLowerCase()) {
//         if(vowels.includes(letter)) {
//             numOfVowels++;
//         }
//     } return numOfVowels;
// }
// console.log('There are ' + counter(step3) + ' vowels in the phrase: ' + step3);
//STEP 4
// let step4 = Math.random().toString(36).substr(2);
// console.log('11 random characters: ' + step4);
// let step4b = Math.random().toString(36).substring(5, 15);
// console.log('More random stuff: ' + step4b);

//STEP 5
// let countries = prompt('List a bunch of countries using a comma');
// function longest(countries) {
//     let longestWord = countries.split(', ').sort((one, two) => { 
//         return two.length - one.length; });
//         return longestWord[0];
//   }
//   console.log('Longest country name: ' + longest(countries));