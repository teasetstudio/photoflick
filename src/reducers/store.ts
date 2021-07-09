import { configureStore } from "@reduxjs/toolkit";
import reducer from "./index";

const store = configureStore({ reducer });
export default store;

const update = () => {
  console.log("store", store.getState().search);
  localStorage.setItem(
    "bookmarks",
    JSON.stringify(store.getState().bookmarks.photos || [])
  );
};
store.subscribe(update);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
