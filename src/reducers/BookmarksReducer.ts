import { createSlice } from "@reduxjs/toolkit";
import { IPhoto } from "../types";

// REDUCER
interface IState {
  photos: IPhoto[];
}
const startItems = JSON.parse(localStorage.getItem("bookmarks") || "[]");
const initialState: IState = {
  photos: startItems,
};

const BookmarksReducer = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addPhoto(state, { payload }) {
      state.photos.push(payload);
    },
    removePhoto(state, { payload }) {
      const index = state.photos.findIndex((i) => i.id === payload.id);
      state.photos.splice(index, 1);
    },
  },
});

export default BookmarksReducer.reducer;
export const { addPhoto, removePhoto } = BookmarksReducer.actions;
