import { ADD, MINUS, LIST } from "../constants";

const INITIAL_STATE = {
  num: 0,
  list: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      };
    case LIST:
      console.log(action.payload);
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
