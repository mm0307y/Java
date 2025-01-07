function createStore() {
  //상태값을 관리하는 저장소
  let state;

  //함수를 관리하는 배열
  let handlers = [];
  function send(action) {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  }

  //구독 발행 모델
  function subscribe(handler) {
    handlers.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    send, // 자바스크립트는 고차함수를 지원한다. 함수를 외부로 내보낼 수 있다.
    getState,
    subscribe,
  };
} //// end of createStore -> redux.js 생성 -> function앞에 export 붙였다.
// ECMAScript6 - 2015년 표준 - 모던웹 - 모듈화 지원

function worker(state = { count: 0 }, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 }; //얕은복사- 원본
    case "decrease":
      return { ...state, count: state.count - 1 }; //얕은복사- 원본
    case "reset":
      return { ...state, count: 0 }; //얕은복사- 원본
    default:
      return { ...state };
  }
}

const store = createStore(worker); // 외부에서 사용하기 위해서 작성한다.

store.subscribe((state) => {
  console.log(store.getState());
});

store.send({ type: "increase" });
store.send({ type: "increase" });
store.send({ type: "decrease" });
store.send({ type: "reset" });

/* 
  store는 상태 묶음이다.
*/
