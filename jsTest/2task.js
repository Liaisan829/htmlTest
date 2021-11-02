let anagram = function(word1, word2) {
    let arr1 = word1.toLowerCase().split('').sort();
    let arr2 = word2.toLowerCase().split('').sort();

    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(anagram("gallsfveery", "allergy"));