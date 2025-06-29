public class Logger {
    // 1. Private static instance of Logger (eager initialization or lazy via getInstance)
    private static Logger instance;

    // 2. Private constructor to prevent external instantiation
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // 3. Public static method to provide global access to the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // 4. Example method for logging
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}
