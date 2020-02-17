import axios from "axios";

const baseUrl =
  "https://game-project-alex-brian-server.herokuapp.com/" ||
  "http://localhost:4000";

export const LOG_IN = "LOG_IN";

function actionCreator(JWT) {
  return {
    type: "LOG_IN",
    payload: JWT
  };
}

export function login(userName, password) {
  return async (dispatch, getState) => {
    axios
      .post(`${baseUrl}/login`, { userName, password })
      .then(response => {
        const action = actionCreator(response.body);
        dispatch(action);
      })
      .catch(console.error);
  };
}
