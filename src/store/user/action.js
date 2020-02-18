import axios from "axios";

const baseUrl =
  "https://game-project-alex-brian-server.herokuapp.com" ||
  "http://localhost:4000";

export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";

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
    dispatch(tokenFetched(response.data));
  } catch (error) {
    console.error(error);
  }
};

const signUpSuccess = () => ({
  type: SIGN_UP
});

export const signUp = (userName, email, password) => async (
  dispatch,
  getState
) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, {
      userName,
      email,
      password
    });
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
};
