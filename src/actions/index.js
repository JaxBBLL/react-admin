import { ADD, MINUS, LIST, DECODE } from "../constants";
import { createAction } from "../utils/redux";
import { API_POETRY } from "../constants/api";
import Jsonp from "../utils/jsonp";

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

export const fetchList = city =>
  createAction({
    url: API_POETRY,
    method: "GET",
    type: LIST,
    payload: {
      city
    }
  });

export const decode = address => {
  return dispatch => {
    Jsonp({
      url: "http://api.map.baidu.com/geocoder/v2/",
      data: {
        address: address,
        output: "json",
        ak: "GRdh3Gcjzyb8PVGskyEahNpR73mgX981"
      },
      callback: "callback",
      success: data => {
        console.log(data)
        dispatch({
          type: DECODE,
          payload: data.result.location
        });
      }
    });
  };
};
