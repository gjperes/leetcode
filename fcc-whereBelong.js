const getIndexToIns = (arr, num) => {
  let sortedArr = arr.sort((a,b) => a - b)

  if(arr[0] == undefined || num <= sortedArr[0])
    return 0
  
  for(let i in sortedArr) {
    if (( (parseInt(i) + 1) == sortedArr.length) ||
          (num >= sortedArr[i]) && (num <= sortedArr[(parseInt(i) + 1)])
       )
      return (parseInt(i) + 1)
  }

}

console.log(getIndexToIns([2, 5, 10], 15))
