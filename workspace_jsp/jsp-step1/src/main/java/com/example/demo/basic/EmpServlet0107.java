package com.example.demo.basic;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.extern.log4j.Log4j2;

@Log4j2
// Jakarta프로젝트에서 제공하는 어노테이션이다.
@WebServlet("/emp") // @Controller + @RequestMapping - Spring boot
public class EmpServlet0107 extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String name = new String("이순신");
    HttpSession session = req.getSession();
    session.setAttribute("name", name);

    // 지금은 forward로 할 필요가 없다.
    // 시간을 제어한다. - 톰캣은 30분이 기본 값이다. - 세션타임이 톰캣은 기본값이 있다.
    resp.sendRedirect("/emp0107/empList0107.jsp");
  }
}
