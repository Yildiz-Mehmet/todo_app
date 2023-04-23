import * as types from "./ActionTypes";

const initialState = {
  todos: [{ id: 1, task: "Wake Up", complete: false }],
};
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default todosReducer;
