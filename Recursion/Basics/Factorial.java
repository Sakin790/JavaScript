package Basics;
public class Factorial {
    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        System.out.println(n);
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        int result = factorial(5);
        System.out.println("Factorial: " + result);
    }
}

// first call main function with params 5
// then if condition check, n is 0 or not
// if n = 0, return 1,
