
function reverseString(s1){
    let ans = "";
    for(let i=s1.length-1; i>=0;i--){
        ans = ans + s1[i];
    }
    return ans;
}

console.log(reverseString("geekster"));
console.log(reverseString("javascript"));
console.log(reverseString("code"));