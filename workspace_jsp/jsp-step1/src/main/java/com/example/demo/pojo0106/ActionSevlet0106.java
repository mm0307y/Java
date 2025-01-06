package com.example.demo.pojo0106;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

// 요청 URL패턴에 /를 사용하게 되면 이 서버에 들어오는 모든 요청이 이 클래스로 유입된다.
// 의미없는 확자장자 이지만 식별자로 사용하기 위해서 do를 붙였다.
// 개발자 입장에서는 doGet, doPost 이든 모두 처리를 해야 합니다. - 창구 일원화 - 관리
// 표준 서 블릿에서는 메서드마다 URL패턴을 가질 수 없다.
// Rest API가 아닌 메서드는 구현할 수는 있겠지만 메서드 파라미터에 request와 response
// 객체를 주입 받지 못한다.
// 웹 서비스 구현시 자바는 안되고 서블릿만 되는 이유는 request, response 제공된다.
@WebServlet("*.do") // @Controller와 @RequestMapping이 합쳐졌다.
@Log4j2 // 롬복에서 객체 주입을 해준다. - getter/setter - 객체 주입법 그래도 적용
public class ActionSevlet0106 extends HttpServlet {
  public void doService(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    // -> http://localhost:8000/
    // -> pojo/board/boardList.do -> .do 앞에 있는 글자수:20개,앞에 붙인 pojo는 떼어 내어야 한다.
    // -> pojo/board/boardInsert.do -> 22개
    // -> pojo/board/boardUpdate.do -> 22개
    // -> pojo/board/boardDelete.do -> 21개

    String uri = req.getRequestURI();
    log.info(uri); // /home
    String context = req.getContextPath(); // server.xml -> jsp_step1 1플젝 배포 -> 루트
    log.info(context); // -> /
    String command = uri.substring(context.length() + 1);
    int end = command.lastIndexOf("."); // 20
    // pojo/board/boardList
    // pojo/board/boardInsert
    // pojo/board/boardUpdate
    // pojo/board/boardDelete
    
    command = command.substring(0, 20);
    // 요청 URL 맨 앞에 pojo는 react서버에서 다른 출저인 경우 CORS이슈로 요청이 전달되지 못 한다.
    // 그래서 3000번에서 8000번 출저로 요청이 바뀌면 프록시를 활용하여 요청을 전달 한다. - CORS이슈를 묵인해준다.
    // 우리는 배열에 값이 두 개면 된다.
    // upmu[0] = 업무이름 저장
    // upmu[1] = vpdlwl dlfma
    // 배열은 복사가 안된다.
    
    String temp[] = null;
    temp = command.split("/"); // temp[0] = pojo, temp[1] = board, temp[2] = boardList, or boardInsert, boardUpdate, boardDelete
    String upmu[] = new String[temp.length - 1];

    // 업무배열을 생성시에 temp에 담긴 pojo는 제외 시킨다.
    System.arraycopy(temp, 1, upmu, 0, temp.length - 1);
    
    // 결과는 temp[0]에 있던 pojo는 제외되었다. 

    log.info(upmu.length); // 2가 된다. 왜냐하면 temp에서 pojo를 제외 시켰다., upmu[0] = board, upmu[1] = boardList - .do는 제외되었다.
    req.setAttribute("upmu", upmu); // 결과적으로 얕은복사가 된다.
    // 웹서비스에 필요한 requset와 response 객체는 ActionServlet으로 부터 주입 받는다.
    BoardController0106 bardController = new BoardController0106();
    // upmu[1] -> OrderController, BoardController, NoticeController,
    // MemberController
    // upmu[2] -> boardList.do.jsp -> ko는 빼고, jsp붙여야 하므로 배열에 담을 때 ko는 제거할 것
  }

  @Override
  protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    log.info("doDelete");
    doService(req, resp);
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    log.info("doGet");
    doService(req, resp);
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    log.info("doPost");
    doService(req, resp);
  }

  @Override
  protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    log.info("doPut");
    doService(req, resp);
  }

}
