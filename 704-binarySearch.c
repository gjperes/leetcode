int search(int* nums, int numsSize, int target){
    int max = numsSize - 1;
    int min = 0;

    while (min <= max) {
        int half = (int)(floor(max + min / 2));

        if(nums[half] == target)
            return half;
        else if(nums[half] > target) 
            max = half - 1;
        else 
            min = half + 1;
    }

    return -1;
}