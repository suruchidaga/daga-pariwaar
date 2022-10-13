import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { clearToken } from "@lib/helpers/utility";
import actions from "./actions";
import ApiSauce from "@services/apiSauce";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const authSession = (payload) => {
  const { url, body } = payload;
  return ApiSauce.post(url, body, headers);
};

export function* loginRequest() {
  yield takeEvery("LOGIN_REQUEST", function* ({ payload }) {
    try {
      // const res = yield call(authSession, payload);
      // Use this mock response if login fails
      const res = {
        rank_name: "PC",
        status_name: "WORKING",
        date_of_birth: "08/02/1993",
        hrms_unit_id: 1472,
        mobile_no: "9840652914",
        employee_name: "Daga Member",
        general_no: "7829",
        date_of_retirement: "28/02/2054",
        unit_name: "Balanagar PS(Cyberabad)",
        emp_role_name: "RECEPTION",
        date_of_join_in_service: "01/02/2018",
        cctns_unit_id: 2022004,
        rank: 9,
        emp_role_id: 8,
        pao_code: "2301319",
        statusCode: 200,
        success: true,
      };
      if (res.statusCode === 200) {
        yield put({
          type: actions.LOGIN_SUCCESS,
          currentUser: res,
        });
      } else {
        yield put({
          type: actions.LOGIN_ERROR,
          errorMessage: "Something went wrong. Please try after some time.",
        });
      }
    } catch (error) {
      yield put({
        type: actions.LOGIN_ERROR,
        errorMessage: "Something went wrong. Please try after some time.",
      });
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function* (payload) {
    yield localStorage.setItem(
      "currentUser",
      JSON.stringify(payload?.currentUser)
    );
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function* () {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function* ({ payload }) {
    const message = "You have successfully logout";
    sessionStorage.clear();
    if (message) {
      yield clearToken();
      payload.history.push("/login");
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
  ]);
}
