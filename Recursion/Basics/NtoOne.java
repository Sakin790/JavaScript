package Basics;
public class NtoOne {
    public static void func(int n) {

        if (n == 0) {
            return;
        }
        System.out.println(n);
        func(n - 1);
    }

    public static void main(String[] args) {
        func(6);
    }
}
