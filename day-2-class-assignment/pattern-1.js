function print(){
    let row = 5;
    let space = row*2-2;
    for(let i = 1;i<=row;i++){
        let str ="";
        for(let k = 1;k <= space; k++){
            str += " ";
        }
        for(let j = 1; j < 2*i; j++){
            str += j + " ";
        }
        console.log(str);
        space -= 2;
    }
}

print();