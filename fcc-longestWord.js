const findLongestWordLength = (str) => {
    const funcArr = str.split(" ")
    let longest = 0

    for(let i=0; i<funcArr.length; i++)
        if(funcArr[i].length > longest)
            longest = funcArr[i].length
    
    return longest
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")