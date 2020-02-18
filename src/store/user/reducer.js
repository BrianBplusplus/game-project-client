import { LOG_IN, SIGN_UP } from "./action";

const initialState = {
  userCreated: false,
  token: null
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN: {
      return { ...state, token: action.payload };
    }
    case SIGN_UP: {
      return { ...state, userCreated: true };
    }

    default:
      return state;
  }
}
