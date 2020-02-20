import axios from "axios";
import { baseUrl } from "../../App";

export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";
export const JOIN_ROOM = "JOIN_ROOM";

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

const joinRoomSuccess = () => ({
  type: JOIN_ROOM
});

export const joinRoom = roomId => async (dispatch, getState) => {
  try {
    const updatedUser = await axios.put(
      `${baseUrl}/room/join`,
      {
        roomId
      },
      { headers: { Authorization: `Bearer ${getState().user.token.token}` } }
    );
    if (updatedUser) {
      dispatch(joinRoomSuccess());
    }
  } catch (error) {
    console.error(error);
  }
};
