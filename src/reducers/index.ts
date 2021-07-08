import { combineReducers } from "@reduxjs/toolkit";
import SearchReducer from "./SearchReducer";
import BookmarksReducer from "./BookmarksReducer";

export default combineReducers({
  search: SearchReducer,
  bookmarks: BookmarksReducer,
});
