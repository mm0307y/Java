CREATE database webdb character set utf8 default collate utf8mb3_general_ci;

use webdb; #(데이터베이스 이름)

create table notice(
    n_no int auto_increment primary key,
    n_title varchar(50),
    n_writer varchar(30),
    n_content varchar(500)
);

insert into notice(n_title, n_writer, n_content)
values('제목1', '작성자1', '내용1');

insert into notice(n_title, n_writer, n_content)
values('제목2', '작성자2', '내용2');

insert into notice(n_title, n_writer, n_content)
values('제목3', '작성자3', '내용3');

commit;

select n_no, n_title, n_writer, n_content
  from notice;