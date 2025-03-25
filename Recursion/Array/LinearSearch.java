package Array;

public class LinearSearch {
    public static int Search(int[] arr, int target, int index) {
        if (index == arr.length) {
            return -1;
        }
        if (arr[index] == target) {
            return target;
        }
        return Search(arr, target, index + 1);
    }
}
