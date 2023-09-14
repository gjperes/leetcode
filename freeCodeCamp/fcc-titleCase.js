const titleCase = (str) => {
    let titleCaseArr = str.split(" ")
    let returnStr = ""

    for(let i=0; i < titleCaseArr.length; i++) {
        titleCaseArr[i][0] = titleCaseArr[i][0].toUpperCase()
        returnStr += titleCaseArr[i]
    }

    return returnStr
}
  
titleCase("I'm a little tea pot")