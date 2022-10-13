import { all } from "redux-saga/effects";
import authSagas from "@redux/auth/saga";
import dashboardSagas from "@redux/dashboard/saga";

export default function* rootSaga() {
  yield all([authSagas(), dashboardSagas()]);
}
