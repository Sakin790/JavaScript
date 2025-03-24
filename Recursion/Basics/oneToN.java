package Basics;
public class oneToN {

    public static void OneT(int n) {
        if (n > 10) {
            return;
        }
        System.out.println(n);
        OneT(n + 1);
    }

    public static void main(String[] args) {
        OneT(1);
    }
}
