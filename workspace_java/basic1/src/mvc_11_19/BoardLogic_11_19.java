package mvc_11_19;

import java.util.*;

public class BoardLogic_11_19 {

    //insert here - 객체 주입코드 - BoardDao - 생성자 호출(인스턴스화)
    public BoardVO_11_19 boardInsert(BoardVO_11_19 pbvo){
        System.out.println("Board Insert called");
        BoardVO_11_19 rbvo = new BoardVO_11_19();
        return rbvo;
    }

    public BoardVO_11_19 boardUpdate(BoardVO_11_19 pbvo){
        System.out.println("Board Update called");
        BoardVO_11_19 rbvo = new BoardVO_11_19();
        return rbvo;
    }

    public BoardVO_11_19 boardDelete(int b_no){
        System.out.println("Board Delete called");
        BoardVO_11_19 rbvo = new BoardVO_11_19();
        return rbvo;
    }

    public Map<String, Object> boardDetail(int b_no){
        System.out.println("Board Detail called");
        Map<String, Object> map = new HashMap<String, Object>();
        return map;
    }

    public List<Map<String, Object>> boardList(BoardVO_11_19 pbvo){
        System.out.println("Board List called");
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        return list;
    }


}
