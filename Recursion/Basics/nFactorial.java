package Basics;
public class nFactorial {

    public static int fact(int n) {
        if (n == 0) {
            return 1;
        }
        System.out.println(n);
        return n * fact(n - 1);
    }

    public static void main(String[] args) {
        int result = fact(5);
        System.out.println("Factorial: " + result);
    }
}
