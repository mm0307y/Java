package com.example.demo.pojo0106;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class BoardController0106 implements Controller0106 {

  @Override
  public String execute(HttpServletRequest req, HttpServletResponse res) throws Exception {
    // upmu[0] = board, order, notice, member, login
    // upmu[1] = boardList, boardInsert, boardUpdate, boardDelete
    String upmu[] = (String[]) req.getAttribute("upmu");

    // 스프링은 메서드 위에 GetMapping, PostMapping, PutMapping, DeleteMapping이 지원되니까
    // 이렇게 if문으로 제어를 하지 않아도 된었다.
    // 왜 서블릿에서 이것이 최선인가? - 개발자가 작성하는 메서드 이름을 알 수 없다.

    // 글 목록 조회 할거야?
    if ("boardList".equals(upmu[1])) {

    }

    // 글 등록하기 구현
    else if ("boardInsert".equals(upmu[1])) {

    }

    // 글 수정하기 구현
    else if ("boardUpdate".equals(upmu[1])) {

    }

    // 글 삭제하기 구현
    else if ("boardDelete".equals(upmu[1])) {

    }

    // 글 상세보기 구현
    else if ("boardDetail".equals(upmu[1])) {

    }
    return null;
  }

}
