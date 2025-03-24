package Basics;
public class PrintArray {
    public static void printarr(int[] arr, int index) {

        if (index < 0)
            return;
        System.out.println(arr[index] + " ");
        printarr(arr, index - 1);
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        printarr(arr, arr.length - 1);
    }
}
