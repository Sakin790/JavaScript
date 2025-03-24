package Basics;
public class Sum {
    public static int SumN(int n) {
        if (n <= 1) {
            return 1;
        }
        System.out.println(n);
        return n + SumN(n - 1);
    }

    public static void main(String[] args) {
        int result = SumN(5);
        System.out.println(result);
    }
}
