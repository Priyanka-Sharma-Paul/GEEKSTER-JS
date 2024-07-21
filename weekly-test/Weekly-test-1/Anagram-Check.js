function checkAnagram(s1,s2){
    if(s1.length!=s2.length){
        return false;
    }
    let map1=getFrequencyMap(s1)
    let map2=getFrequencyMap(s2)
    
    for(ch in map1){
        if(map1[ch] != map2[ch]){
            return false;
        }
    }

    return true;
}

function getFrequencyMap(s) {
    let map={}
    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }
    return map;
}

console.log(checkAnagram("dog", "god"))
console.log(checkAnagram("code", "doc"))