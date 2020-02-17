import { LOG_IN } from "./action";

export default function(state = "", action = {}) {
  switch (action.type) {
    case LOG_IN: {
      return action.payload;
    }

    default:
      return state;
  }
}
