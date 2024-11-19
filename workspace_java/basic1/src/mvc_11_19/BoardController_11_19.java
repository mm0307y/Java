package mvc_11_19;
/*
1. 일반화 / 특정화 고나점에서 이해하는 방법
2. 기능의 고나점에서 이해하는 방법
- 공통(DBConnectionMgr, Person) 클래스를 만들고
그로부터  상속받은  상태와 기능을 재활용해 보기*/


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class BoardController_11_19 {
    public static final String _ALL = "selectAll"; //리턴타입 - List<Map<>>, List<BoardVO>
    public static final String _ONE= "selectOne"; //Map or BoardVO
    public static final String _INS= "insert"; //int
    public static final String _UPD= "update"; //int
    public static final String _DEL= "delete"; //int
    //insert, update, delete는 int
    //한건조회는 BoardVO

    public BoardVO_11_19 send(BoardVO_11_19 pbvo){
        String command  = pbvo.getCommand();
        if (_INS.equals(command)){ //글 등록이라면?
            System.out.println("글등록 메시지 호출 성공");
        }
        else if (_UPD.equals(command)){ //글 수정이라면?
            System.out.println("글등록 메시지 수정 성공");
        }
        else  if (_DEL.equals(command)){ //글 삭제라면?
            System.out.println("글등록 메시지 삭제 성공");
        }
        else  if (_ONE.equals(command)){ //상세보기라면?
            System.out.println("글등록 메시지 상세보기 성공");
        }

        return new BoardVO_11_19();
    }


    //전체 조회 구현하기
    public List<Map<String, Objects>> getBoardListAll(){
        System.out.println("전체 조회 호출 성공");
        return new ArrayList<>();
    }
}
