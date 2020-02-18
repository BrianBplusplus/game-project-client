const ALL_ROOMS = "ALL_ROOMS";
const ONE_ROOM = "ONE_ROOM";
const JOIN_ROOM = "JOIN_ROOM";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_ROOMS: {
      return action.payload;
    }

    case ONE_ROOM: {
      return [...state, action.payload];
    }

    case JOIN_ROOM: {
      return state.map(room => {
        return room.id === action.payload.id ? action.payload : room;
      });
    }

    default:
      return state;
  }
}
