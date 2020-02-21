const DELETE_CANVAS = "DELETE_CANVAS";

const initialState = {
  users: [],
  round: 0
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case DELETE_CANVAS: {
      return state;
    }

    default:
      return state;
  }
}
