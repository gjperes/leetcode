const truncateString = (str, num) => {
    let truncString = ""
    let i = 0

    for(i=0; i < str.length && i<num; i++)
        truncString += str[i]
    
    if(num == str.length - 1 || i + 1 < str.length)
        truncString += '...'

    return str;
}
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);