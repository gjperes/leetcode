/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = (nums, target) => {
    let max = nums.length - 1
    let min = 0
    
    while(min <= max) {
        let half = Math.floor(min + (max - min) / 2)
        if(nums[half] == target)
            return half
        else if(nums[half] > target)
            max = half - 1
        else
            min = half + 1
    }
    return min
};