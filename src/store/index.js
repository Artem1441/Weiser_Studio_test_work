import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { scheduleReducer } from "./scheduleReducer";
import { rowsReducer } from "./rowsReducer";

const rootReducer = combineReducers({
  scheduleName: scheduleReducer,
  rowsName: rowsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
