function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [];

    set1.forEach(item => {
        if (set2.has(item)) {
            intersection.push(item);
        }
    });

    return intersection;
}


console.log(findIntersection([1,2,3,4,5], [3,4,5]))