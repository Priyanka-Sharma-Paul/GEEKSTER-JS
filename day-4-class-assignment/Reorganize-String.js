function reorganizeString(s) {
    let frequency = {};
    for (let char of s) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    let maxHeap = [];
    for (let char in frequency) {
        maxHeap.push([frequency[char], char]);
    }
    maxHeap.sort((a, b) => b[0] - a[0]);
    let result = [];
    while (maxHeap.length > 1) {
        let [count1, char1] = maxHeap.shift();
        let [count2, char2] = maxHeap.shift();
        result.push(char1);
        result.push(char2);
        if (count1 - 1 > 0) {
            maxHeap.push([count1 - 1, char1]);
        }
        if (count2 - 1 > 0) {
            maxHeap.push([count2 - 1, char2]);
        }
        maxHeap.sort((a, b) => b[0] - a[0]);
    }
    if (maxHeap.length > 0) {
        let [count, char] = maxHeap.shift();
        if (count > 1) {
            return "";
        }
        result.push(char);
    }
    return result.join('');
}

console.log("aab : " +reorganizeString("aab")); 
console.log("aaab : " +reorganizeString("aaab")); 
