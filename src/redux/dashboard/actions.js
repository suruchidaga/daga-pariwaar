const actions = {
  FETCH_DASHBOARD_REQUEST: "FETCH_DASHBOARD_REQUEST",
  FETCH_DASHBOARD_SUCCESS: "FETCH_DASHBOARD_SUCCESS",
  FETCH_DASHBOARD_ERROR: "FETCH_DASHBOARD_ERROR",

  FETCH_RECENTEDITLIST_REQUEST: "FETCH_RECENTEDITLIST_REQUEST",
  FETCH_RECENTEDITLIST_SUCCESS: "FETCH_RECENTEDITLIST_SUCCESS",
  FETCH_RECENTEDITLIST_ERROR: "FETCH_RECENTEDITLIST_ERROR",

  FETCH_DASHBOARD_CASE_COUNT_REQUEST: "FETCH_DASHBOARD_CASE_COUNT_REQUEST",
  FETCH_DASHBOARD_CASE_COUNT_SUCCESS: "FETCH_DASHBOARD_CASE_COUNT_SUCCESS",
  FETCH_DASHBOARD_CASE_COUNT_ERROR: "FETCH_DASHBOARD_CASE_COUNT_ERROR",

  fetchDashboardDetails: (url) => ({
    type: actions.FETCH_DASHBOARD_REQUEST,
    payload: { url },
  }),

  fetchRecentEditList: (url) => ({
    type: actions.FETCH_RECENTEDITLIST_REQUEST,
    payload: { url },
  }),

  fetchCaseCountList: (url) => ({
    type: actions.FETCH_DASHBOARD_CASE_COUNT_REQUEST,
    payload: { url },
  }),

};
export default actions;
