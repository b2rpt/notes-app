import { combineReducers } from "redux";
import notesReducer from "./notesReducer";

const appReducer = combineReducers({
  notes: notesReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
