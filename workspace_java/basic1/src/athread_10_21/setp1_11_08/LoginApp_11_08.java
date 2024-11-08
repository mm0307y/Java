package athread_10_21.setp1_11_08;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class LoginApp_11_08 extends JFrame implements ActionListener {
    String nickName = "데모용";
    KiwiClient_11_08 kc = new KiwiClient_11_08(this);
    public LoginApp_11_08() {
        initDisplay();
    }
    public void initDisplay() {

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        //로그인 처리합니다.
        nickName = "키위";
    }

    public static void main(String[] args) {
        new LoginApp_11_08(); //21 -> 9메모리 로딩
    }
}
