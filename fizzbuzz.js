

//initialize my start/end parameters
var start = 1;
var end = 20; 
var isDivisibleByFive;
var isDivisibleByThree;

//iterate through all number between and including start and end
for (var counter = start; counter <= end; counter+=1)
{
    //check that number is divisible by 5
    isDivisibleByFive = counter%5 === 0;
    
    //check that number is divisible by 3
    isDivisibleByThree = counter%3 === 0;
    
    if(isDivisibleByFive === true && isDivisibleByThree === true){
        console.log("FizzBuzz");  
    }
    else if(isDivisibleByFive === true) {
        console.log("Buzz");
    }
    else if(isDivisibleByThree === true) {
        console.log("Fizz");
    }
    else {
        console.log(counter)
    }
}


