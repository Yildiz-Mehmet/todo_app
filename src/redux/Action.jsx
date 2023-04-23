import * as types from "./ActionTypes";

export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});
