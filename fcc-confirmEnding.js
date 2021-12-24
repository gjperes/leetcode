// confirm ending without ES2015 .endsWith()

const confirmEnding = (str, target) => {
    let strSize = str.length - 1
    let targetSize = target.length -  1
  
    while(targetSize >= 0){
      if(str[strSize] != target[targetSize])
        return false
      strSize--
      targetSize--
    }

}
  
confirmEnding("Bastian", "n");