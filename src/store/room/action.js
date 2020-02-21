import axios from "axios";
import { baseUrl } from "../../App";

export const DELETE_ROOM = "DELETE_ROOM";

const deleteRoomSuccess = () => ({
  type: DELETE_ROOM
});

export const deleteRoom = roomId => async (dispatch, getState) => {
  console.log("roomId", roomId);
  try {
    const response = await axios.delete(`${baseUrl}/room`, {
      data: { roomId }
    });
    if (response) {
      dispatch(deleteRoomSuccess());
    }
  } catch (error) {
    console.error(error);
  }
};
