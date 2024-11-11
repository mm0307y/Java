package athread_10_21.setp1_11_08;

import com_10_28.util_10_28.DBConnectionMgr_10_28;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TalkDao_11_11 {
    DBConnectionMgr_10_28 dbMgr = DBConnectionMgr_10_28.getInstance(); //싱글톤패턴
    Connection con = null;
    PreparedStatement pstmt= null;
    ResultSet rs = null;
    //메서드 설계하기 - 리턴 타입과 파라미터 타입을 결정할 수 있다.
    public boolean memIdCheck(String p_id){
        StringBuilder sql = new StringBuilder();
        sql.append("select mem_id from talk_member where mem_id=?");

        try{
            con = dbMgr.getConnection();
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setString(1, p_id);
            rs = pstmt.executeQuery();
            if (rs.next()) { //rs.next()가 참이면 입력한 아이디가 존재한다.
                if (rs.getString("mem_id") != null) {
                    return true; //입력 받은 아이디가 존재합니다.
                }
                else {
                    return false; //입력 받은 아이디가 존재하지 않습니다.
                }
            }

        }catch (SQLException se){

        }
        catch (Exception e){
            throw new RuntimeException(e);
        }
        return false;
    }

    public static void main(String[] args) {
        TalkDao_11_11 dao = new TalkDao_11_11();
        //System.out.println(dao.memIdCheck("kiwi"));
    }
}
