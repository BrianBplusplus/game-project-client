import { ALL_ROOMS } from "./action";

const initialState = {
  rooms: []
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_ROOMS: {
      return { ...state, rooms: action.payload };
    }

    default:
      return state;
  }
}
