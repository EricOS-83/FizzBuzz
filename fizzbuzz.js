var output = [];
var x = 1;

function FizzBuzz() {
    
 while(x <= 100) {   

    if (x % 3 === 0 && x % 5 === 0){
        output.push("FiZZBuzz");
    }
    else if (x % 3 === 0){
        output.push("Fizz");
    }
    else if (x % 5 === 0){
        output.push("Buzz");
    }
    
    else{
        output.push(x);
    }
    
    x++;

 }
 console.log(output);             
}

FizzBuzz();