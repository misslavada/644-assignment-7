/*eslint-env browser*/
//STEP 1
// let step1 = prompt('Select a month using the number associated with that month i.e 1 - 12: ');
// let daysInMonth = function(month,year) {
//     return new Date(year, step1, 0).getDate();
//  };
// console.log(daysInMonth(1, 1975));

//STEP 2
// let step2 = prompt('Enter a date: ');
// let date = new Date (step2);
// console.log(date);
// console.log('Month name:', date.toLocaleString('default', {month: 'long'}));

//STEP 3
// let step3 = prompt('Enter a date:');
// let whichDay =  (step3) => {
//     let date = new Date(step3);
//     if(date.getDay() == 6 || date.getDay() == 0) {
//         return "whichDay";
//     } else {
//         return "weekday";
//     }
// };
// console.log(step3 + " is a " + whichDay());
//STEP 4
// let step4 =  () => {
//     let yesterday = new Date()-1;
//     let week =  yesterday.getDay();
//         return week.toLocaleString("default", {weekday : "long"});
// };
// console.log("Yesterday's day of the week was " + step4());
//STEP 5 DONE
// let todaysDate = new Date();
// let weekday = todaysDate.toLocaleString("default", { weekday: "long" });
// console.log(weekday);
// let first = weekday.slice(0,1);
// console.log("Step 5: " + first);

// let step5 = new Date();
// userDate = window.prompt("Enter a date (i.e January 13, 2021)", step5);
// let theDate = new Date(userDate);
// console.log("Step 5");
// console.log(theDate.toLocaleString('default', { weekday: 'narrow' }));
