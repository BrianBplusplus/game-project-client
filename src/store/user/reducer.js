import { LOG_IN, SIGN_UP, JOIN_ROOM } from "./action";

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

    case JOIN_ROOM: {
      return state;
    }

    default:
      return state;
  }
}
