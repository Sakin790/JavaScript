package Array;

public class Linear {
    public static int Lin(int[] arr, int target, int index) {

        if (index == arr.length - 1) {
            return -1;
        }
        if (arr[index] == target) {
            return arr[index];
        }

        return Lin(arr, target, index + 1);

    }

    public static void main(String[] args) {
        int[] score = { 10, 20, 30 };
        int result = Lin(score, 200, 0);
        System.out.println(result);
    }
}
