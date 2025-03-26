package Array;

import java.util.Arrays;

public class BubleSort {
    public static int Buble(int[] arr, int index) {

        if (arr[index] > arr[index + 1]) {
            int temp = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = temp;

        }
        return Buble(arr, index - 1);
    }

    public static void main(String[] args) {
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
        Buble(arr, arr.length);
        System.out.println(Arrays.toString(arr));
    }
}
