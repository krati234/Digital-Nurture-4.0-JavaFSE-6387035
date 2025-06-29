public class SingletonTest {
    public static void main(String[] args) {
        // Try to get multiple instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Log messages
        logger1.log("First log message.");
        logger2.log("Second log message.");

        // Test if both logger instances are the same
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same (Singleton works).");
        } else {
            System.out.println("Logger instances are different (Singleton failed).");
        }
    }
}
