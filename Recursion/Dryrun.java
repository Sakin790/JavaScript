public class Dryrun {
    static int printN(int n) {
        if (n == 10) {
            return 0;
        }

        System.out.println(n);
        return printN(n + 1);

    }

    public static void main(String[] args) {
        printN(1);
    }
}
