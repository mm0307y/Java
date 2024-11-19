package mvc_11_19;

public class BoardVO_11_19 {
    //화면에서 컨트롤 계층으로 보낼 메시지 저장
    // selectAll, selectOnt, insert, update, delete
    private String command = null;
    private  int result = -1; //1이면 입력|수정|삭제 성공, 0이면 실패

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public int getResult() {
        return result;
    }
    public void setResult(int result) {
        this.result = result;
    }
}
