function decodeString(s) {
    let stack = [];
    let currentNum = 0;
    let currentString = '';

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            stack.push(currentString);
            stack.push(currentNum);
            currentNum = 0;
            currentString = '';
        } else if (char === ']') {
            let num = stack.pop();
            let prevString = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else {
            currentString += char;
        }
    }

    return currentString;
}

console.log(decodeString("3[a2[c]]"));