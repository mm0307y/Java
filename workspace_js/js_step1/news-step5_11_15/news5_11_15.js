const container = document.querySelector("#home");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  ajax.open("GET", url, false);
  ajax.send(); //실제 요청이 진행된다.
  return JSON.parse(ajax.response);
}
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
//바로 이럴때 전역변수를 사용하는 것이다. - NEWS_URL
const newsList = getData(NEWS_URL);

window.addEventListener("hashchange", () => {
  const id = location.hash.substring(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");
  title.innerHTML = newsContent.title;
  content.appendChild(title);
});

//뉴스 목록을 담을 배열 선언
const news = [];
news.push("<ul>");

for (let i = 0; i < 10; i++) {
  news.push(` 
    <li>
      <a href="#${newsList[i].id}">
        ${newsList[i].title}(✨ ${newsList[i].comments_count})
      </a>
    </li>
    `);
}////end of for

news.push("</ul>");
container.innerHTML = news.join(''); // 빈문자열을 넣어서 배열을 구분자 없는 문자열로 묶어준다.