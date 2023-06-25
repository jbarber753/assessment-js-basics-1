///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;
// Here I decided to merge the three arrays into one. This saves me from having to create three separate
// loops, and instead I can just take the sum of the elements of a single array.
let totalAcresArray = fujiAcres.concat(galaAcres, pinkAcres);

for (let i = 0; i < totalAcresArray.length; i++){
    totalAcres += totalAcresArray[i];
}
console.log(`total acres: ${totalAcres}`)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// The average acres picked for each day can be calculated by taking the total number of acres picked for the week and dividing by seven.
let averageDailyAcres = totalAcres / 7;
console.log(`average daily acres: ${averageDailyAcres}`)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// Inside the while loop, we can increment the day variable to act as our counter, per the instructions.
// All we need to do then is reassign our acresLeft variable, subtracting our daily average for each iteration until acresLeft
// is no longer greater than zero.

while(acresLeft > 0){
    days++;
    acresLeft -= averageDailyAcres;
}
console.log(`days: ${days}`)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// To convert our acre values to tons, we just need to iterate through each element of each of our acre arrays and 
// multiply each element by 6.5.

for (let i = 0; i < fujiAcres.length; i ++){
    fujiTons.push(fujiAcres[i] * 6.5)
}
for (let i = 0; i < galaAcres.length; i ++){
    galaTons.push(galaAcres[i] * 6.5)
}
for (let i = 0; i < pinkAcres.length; i ++){
    pinkTons.push(pinkAcres[i] * 6.5)
}
console.log(`fuji tons: ${fujiTons}`)
console.log(`gala tons: ${galaTons}`)
console.log(`pink tons: ${pinkTons}`)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// Here we need to iterate again, this time through our new tons arrays for each apple variety. To get from tons to
// pounds, we can multiply each element by 2000. Rather than creating a new array this time, we can then add the weight
// in pounds of each element to our new pound variables for each variety.

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

for (let i = 0; i < fujiTons.length; i++){
    fujiPounds += fujiTons[i] * 2000;
}
for (let i = 0; i < galaTons.length; i++){
    galaPounds += galaTons[i] * 2000;
}
for (let i = 0; i < pinkTons.length; i++){
    pinkPounds += pinkTons[i] * 2000;
}
console.log(`fuji pounds: ${fujiPounds} pounds`)
console.log(`gala pounds: ${galaPounds} pounds`)
console.log(`pink pounds: ${pinkPounds} pounds`)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// Finding the total profit of each variety just requires us to multiply our total pound variables from the
// previous problem to the respective price of each variety, stored in the price variables at the top of the file.

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(`fuji profit: $${fujiProfit}`)
console.log(`gala profit: $${galaProfit}`)
console.log(`pink profit: $${pinkProfit}`)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

//The total overall profit is the sum of the profits of each variety.

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`total profit: $${totalProfit}`)