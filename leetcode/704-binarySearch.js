/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = function(nums, target) {
    let max = nums.length - 1
    let min = 0
    
    while(min <= max) {
        let half = Math.floor((max + min) / 2)
        
        if(target == nums[half])
            return half
        else if(target < nums[half])
            max = half - 1
        else
            min = half + 1
    }
    
    return -1
};

// teste com: search([-1,0,3,5,9,12], NUMERO)