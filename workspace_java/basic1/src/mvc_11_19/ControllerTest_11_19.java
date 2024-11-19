package mvc_11_19;

public class ControllerTest_11_19 {
    public static void main(String[] args) {
        BoardController_11_19 bc = new BoardController_11_19();
        BoardVO_11_19 pbvo = new BoardVO_11_19();
        pbvo.setCommand("selectOne" );
        BoardVO_11_19 rbvo = bc.send(pbvo);
        System.out.println(rbvo.getResult()); //1 : 입력성공, 0 : 입력실패, -1 : 아무것도 한게 없다.
        bc.getBoardListAll();
    }
}
