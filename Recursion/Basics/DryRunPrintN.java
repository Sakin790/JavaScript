package Basics;
public class DryRunPrintN {
    public static void main(String[] args) {
        PrintNums(1);
    }

    static void PrintNums(int n) {

        if (n == 10) {
            return;
        }
        System.out.println(n);
        PrintNums(n + 1);
    }
}
