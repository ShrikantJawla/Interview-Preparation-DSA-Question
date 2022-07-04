let num=2;
let is_true=false;
for(let i=2; i<=num**0.5; i++){
    if(num%i===0){
        is_true=true;
        break;
    }
}
if(is_true===false && num!==1) console.log("Yes");
else console.log("No");

