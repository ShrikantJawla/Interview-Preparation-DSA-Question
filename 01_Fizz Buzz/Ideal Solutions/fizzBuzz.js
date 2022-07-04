let num=10;
let arr=[];
for(let i=1; i<=num; i++){
    if(i%3==0) arr.push("Fizz");
    else if(i%5==0) arr.push("Buzz");
    else if(i%15==0) arr.push("FizzBuzz");
    else arr.push(i);
}
console.log(arr.join(" "));
