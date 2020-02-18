import { combineReducers } from "redux";
import user from "./user/reducer";
import room from "./room/reducer";
import game from "./game/reducer";
export default combineReducers({
  user,
  room,
  game
});
