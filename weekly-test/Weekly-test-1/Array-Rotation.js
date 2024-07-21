function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1,2,3,4], 2));