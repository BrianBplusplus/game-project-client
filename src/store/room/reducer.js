import { ALL_ROOMS, ONE_ROOM } from "./action";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_ROOMS: {
      return action.payload;
    }

    case ONE_ROOM: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
