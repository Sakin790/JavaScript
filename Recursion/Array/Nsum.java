package Array;

public class Nsum {

    static int NSum(int n) {
        if (n == 1) {
            return 1;
        }
        return n + NSum(n - 1);
    }

    public static void main(String[] args) {
        int result = NSum(5);
        System.out.println(result);
    }
}