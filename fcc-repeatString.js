const repeatStringNumTimes = (str, num) => {
    if(num < 1)
        return ""

    let repeatedString = str

    for(let i = 1; i < num; i++) // começa no 1 porque a variável repeatedString já é inicializada no começo da função
        repeatedString += str

    return repeatedString;
}
  
repeatStringNumTimes("abc", 3);