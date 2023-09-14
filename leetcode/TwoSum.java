class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        final Map<Integer, Integer> valuePositions = new HashMap<>(nums.length);
        valuePositions.put(nums[0], 0);

        for (int i = 1; i < nums.length; ++i) {
            int lookup = target - nums[i];
            if (valuePositions.containsKey(lookup)) {
                return new int[]{valuePositions.get(lookup), i};
            }
            valuePositions.put(nums[i], i);
        }

        throw new IllegalArgumentException();
    }
}