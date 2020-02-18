import { ALL_ROOMS } from "./action";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_ROOMS: {
      return action.payload;
    }

    default:
      return state;
  }
}
