package jdbc_10_24.book_11_04;

public class BookNaverSearch_11_07 {
    BookApp_11_04 ba = null;
    public BookNaverSearch_11_07() {

    }
    public BookNaverSearch_11_07(BookApp_11_04 ba) {
        this.ba = ba;
        initDisplay();
    }

    public void initDisplay() {
        System.out.println("initDisplay");
        System.out.println(this.ba); //null
    }

    public static void main(String[] args) {
        new BookNaverSearch_11_07(null);
    }
}
