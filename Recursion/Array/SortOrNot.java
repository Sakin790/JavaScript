package Array;

public class SortOrNot {

    public static boolean SortOr(int[] arr, int index) {
        if (index == arr.length - 1) {
            return true;
        }
        ;
        if (arr[index] > arr[index + 1]) {
            return false;
        }
        return SortOr(arr, index + 1);
    }

    public static void main(String[] args) {
        int[] score = { 1, 4, 3 };
        boolean result = SortOr(score, 0);
        System.out.println(result);
    }
}
