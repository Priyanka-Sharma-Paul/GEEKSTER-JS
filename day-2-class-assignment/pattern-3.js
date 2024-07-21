function print(){
    let row = 5;

    for(let i = 1;i<=row;i++){
        let str ="";
        
        for(let j = i; j >=1; j--){
            str += j + " ";
        }
        console.log(str);
    }
    for(let i = row -1;i>=1;i--){
        let str ="";
        for(let j = i; j >=1; j--){
            str += j + " ";
        }
        console.log(str);
    }
}
print();