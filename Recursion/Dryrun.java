public class Dryrun {

    static boolean isSort(int[] nums) {

        int count = 0;
        for (int i = 0; i < nums.length; i++)
            if (nums[i] > nums[(i + 1) % nums.length] && ++count > 1)
                return false;
        return count <= 1;

    }
}
