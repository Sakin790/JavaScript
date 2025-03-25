package Array;

public class BinarySearch {
    public static int BS(int[] arr, int target, int start, int end) {
        if (start > end) {
            return -1; 
        }

        int mid = start + (end - start) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (target < arr[mid]) {
            return BS(arr, target, start, mid - 1);
        } else {
            return BS(arr, target, mid + 1, end);
        }
    }

    public static void main(String[] args) {
        int[] score = { 100, 200, 300 };
        int result = BS(score, 200, 0, score.length - 1);
        System.out.println(result);
    }
}
