public class Algorithms {

    public static double max(double[] a) {
        double max = a[0];
        for (int i = 1; i < a.length; i++) {
            if (a[i] > max) {
                max = a[i];
            }
        }

        return max;
    }

    public static double average(double[] a) {
        int n = a.length;
        double sum;

        for (int i = 0; i < n; i++) {
            sum += a[i];
        }

        return (sum / n);
    }

    public static double[] copy(double[] a) {
        double[] n = new double[a.length];

        for (int i = 0; i < a.length; i++) {
            n[i] = a[i];
        }

        return n;
    }

    // bem interessante
    public static void reverse(double[] a) {
        int n = a.length;

        for (int i = 0; i < (n / 2); i++) {
            double temp = a[i];
            a[i] = a[(n - 1) - i];
            a[(n - 1) - i] = temp;
        }
    }

    public static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }

        // não entendi o motivo
        for (int i = 2; i*i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
}