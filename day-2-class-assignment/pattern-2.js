function print(){
    let row = 5;
    let space = row*2-2;
    for(let i = 1;i<=row;i++){
        let str ="";
        for(let k = 1;k <= space; k++){
            str += " ";
        }
        for(let j = 1; j <= i; j++){
            str += j + " ";
        }
        console.log(str);
        space -= 2;
    }
    space=2;
    for(let i = row -1;i>=1;i--){
        let str ="";
        for(let k = 1;k <= space; k++){
            str += " ";
        }
        for(let j = 1; j <= i; j++){
            str += j + " ";
        }
        console.log(str);
        space +=2;
    }
}
print();