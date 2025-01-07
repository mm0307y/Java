import * as ActionType from './action-typs0107.js'

export function reducer0107(state = { count: 0 }, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 }; //얕은복사- 원본
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 }; //얕은복사- 원본
    case ActionType.RESET:
      return { ...state, count: 0 }; //얕은복사- 원본
    default:
      return { ...state };
  }
}