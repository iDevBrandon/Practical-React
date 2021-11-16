import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../ducks/user";
import { handleGetUser } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
