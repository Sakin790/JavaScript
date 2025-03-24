package Array;

public class isSort {
    public static void main(String[] args) {
        int[] score = { 10, 20, 30 };
        int[] rating = { 120, 110, 130 };

        System.out.println(isSorted(score, 0));
        System.out.println(isSorted(rating, 0));
    }

    public static boolean isSorted(int[] arr, int index) {
        if (index == arr.length - 1)
            return true;
        if (arr[index] > arr[index + 1])
            return false;
        return isSorted(arr, index + 1);
    }
}
