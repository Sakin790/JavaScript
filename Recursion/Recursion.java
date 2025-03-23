class Recursion {
    public static void printNums(int n) {
        if (n < 1) {
            return;
        }
        System.out.print(n + " ");
        printNums(n - 1);
    }

    public static void main(String[] args) {
        int n = 4;
        printNums(n);
    }
}
