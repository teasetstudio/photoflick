import { configureStore } from "@reduxjs/toolkit";
import reducer from "./index";

const store = configureStore({ reducer });
export default store;

const update = () => {
  localStorage.setItem(
    "bookmarks",
    JSON.stringify(store.getState().bookmarks.photos || [])
  );
};
store.subscribe(update);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
