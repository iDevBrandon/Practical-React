import { call, put } from "@redux-saga/core/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../requests/users";

export function* handleGetUser() {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
