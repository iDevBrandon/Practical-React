import { combineReducers } from "redux";
import counter from "../reducer/counter";
import vehicle from "../reducer/vehicle";
import todos from "../reducer/todos";

const rootReducer = combineReducers({
  counter,
  vehicle,
  todos,
});

export default rootReducer;
