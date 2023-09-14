/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    let sqrnums = []
    for(let i=0; i<nums.length; i++){
        let sqr = nums[i] * nums[i]
        sqrnums.push(sqr)
    }
    sqrnums.sort((a,b) => a - b) // corrigido "problema" do sort em JavaScript
    return sqrnums
};
