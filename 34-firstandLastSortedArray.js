/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const searchRange = (nums, target) => {
    let max = nums.length - 1
    let min = 0
    let size = null
    
    while (min <= max) {
        let half = Math.floor(min + (max - min) / 2)
        
        if(nums[half] == target) {
            size = half
            
            while(nums[size - 1] == target)
                size--
            let answer = [size]
            
            while(nums[size + 1] == target)
                size++
            answer.push(size)
            
            return answer
        }
        else if(nums[half] < target)
            min = half + 1
        else
            max = half - 1
    }
    
    return [-1, -1]
}