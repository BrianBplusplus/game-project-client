import axios from "axios";

const baseUrl =
  "https://game-project-alex-brian-server.herokuapp.com" ||
  "http://localhost:4000";

export const LOG_IN = "LOG_IN";

const tokenFetched = token => ({
  type: LOG_IN,
  payload: token
});

export const login = (loginName, loginPassword) => async (
  dispatch,
  getState
) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, {
      userName: loginName,
      password: loginPassword
    });
    console.log("response ", response);
    dispatch(tokenFetched(response.data));
  } catch (error) {
    console.error(error);
  }
};
