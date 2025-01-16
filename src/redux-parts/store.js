import { createStore, combineReducers, applyMiddleware } from "redux";
import { questionReducer } from "./questionState";
import { composeWithDevTools } from "@redux-devtools/extension";

const appReducers = combineReducers({ question: questionReducer });

export default createStore(
  appReducers,composeWithDevTools()

);
