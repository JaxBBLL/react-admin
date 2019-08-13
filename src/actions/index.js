import { ADD, MINUS, LIST } from "../constants";
import { createAction } from "../utils/redux";
import { API_POETRY } from "../constants/api";

export const add = () => {
  return {
    type: ADD
  };
};

export const minus = () => {
  return {
    type: MINUS
  };
};

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}

export const fetchList = name =>
  createAction({
    url: API_POETRY,
    method: "GET",
    type: LIST,
    payload: {
      name
    }
  });
