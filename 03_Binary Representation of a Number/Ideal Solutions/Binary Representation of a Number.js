let num=423;

let arr=[];
while(num>=1){
    let rem=num%2;
    arr.push(rem);
    num=Math.floor(num/2);
}
arr.reverse();
console.log(arr.join(" "));