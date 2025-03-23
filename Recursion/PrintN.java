public class PrintN {

    public static void main(String[] args) {
        PrintNums(1);
    }

    static void PrintNums(int n) {
        if (n > 5) {
            return;
        }
        System.out.println(n);
        PrintNums(n + 1);
    }
}
