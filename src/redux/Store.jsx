import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./Root-reducer";

const middlewar = [];
if (process.env.NODE_ENV === "development") {
  middlewar.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewar));
export default store;
