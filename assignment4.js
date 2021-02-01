//Q1  Javascript to calculate user's age, based on DOB, check age eligibility,
// & provide validation alert
// A major goal of our recruitment survey is to identify users who are
// between the ages of 14-24 (target population) and those who are not
// (not eligible for our study). Currently, we ask users for their date of
// birth (MM/DD/YYYY) and would like to use JS to:
// ● Calculate age, based on the current date
// ● Determine if the age is within our target range (14-24)
// ● Provide a validation alert to the users AND/OR categorize users
// using embedded data in the categories of eligible/ineligible
// based on age

//Sol :-
// ● Calculate age, based on the current date
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
// ● Determine if the age is within our target range (14-24)
// ● Provide a validation alert to the users AND/OR categorize users
// using embedded data in the categories of eligible/ineligible
// based on age
var ageValue = calculate_age(11201999)
if(14<=ageValue && ageValue<=24)
{ 
alert('Valid age.');
}
else
{
alert('Invalid age.');
}


//Q2 Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]
function mSort (array) {
    if (array.length === 1) {
    return array                            // return once we hit an array with a single item
 }
 const middle = Math.floor(array.length / 2) // get the middle item of the array rounded down
 const left = array.slice(0, middle)         // items on the left side
 const right = array.slice(middle)           // items on the right side
 
 return merge(
    mSort(left),
    mSort(right)
 )
 }
 // compare the arrays item by item and return the concatenated result
 function merge (left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
       result.push(left[leftIndex])
       leftIndex++
             
       } else {
       result.push(right[rightIndex])
       rightIndex++      
    }
 }
 return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
 }
 const list = [34,7,23,32,5,62]
 console.log(mSort(list));

//Q3  Write a JavaScript program to compute the greatest common divisor(GCD) of two positive integers.
let GCD;
const number1 = 60
const number2 = 72

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        GCD = i;
    }
}

console.log(`HCF of ${number1} and ${number2} is ${GCD}.`);


// Q4 Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
var last_val =  function(array, n) {
    if (array == null) 
      return  0;
    if (n == null) 
       return array[array.length - 1]; // last value   
    return array.slice(Math.max(array.length - n, 0));  
    };
  
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
//Q5 Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

// sol 1:- 
function removeDuplicates(Mynum) {
    var x,
        len=Mynum.length,
        out=[],
        obj=[];

    for (x=0; x<len; x++) {
      obj[Mynum[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);

//sol2:-
const unique = [...new Set(Mynum)]   //using spread operator directly
console.log(unique);

