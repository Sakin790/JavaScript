public class Introduction {

    public static void message() {
        System.out.println("Im mesagae");
        message1();
    }

    public static void message1() {
        System.out.println("Im mesagae 1");
        message2();
    }

    public static void message2() {
        System.out.println("Im mesagae 2");
        message3();
    }

    public static void message3() {
        System.out.println("Im mesagae 3");
        message();
    }

    public static void main(String[] args) {
        System.out.println("Recursion");
        message();
    }
}
