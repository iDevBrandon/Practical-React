import { createStore } from "redux";
import reducer from "../reducer/vehicle";

const store = createStore(reducer);

export default store;
