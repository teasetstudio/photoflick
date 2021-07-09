import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPhoto } from "types";

interface Iobj {
  text: string;
  page: number;
}
interface ResData {
  res: IPhoto[];
  text: string;
}
// async functions
export const getPhotos = createAsyncThunk<ResData, Iobj>(
  "search/getPhotos",
  async (obj) => {
    const res = await axios.get(
      `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=664f5f15f8352ba837becfa4585e3e2e&tags=${obj.text}&page=${obj.page}&format=json&nojsoncallback=1`
    );
    console.log("server data", res);
    return { res: res.data.photos, text: obj.text };
  }
);

// REDUCER
interface IState {
  photos: IPhoto[] | null;
  page: number;
  pages: number;
  text: string;
  loading: boolean;
  error: boolean;
}
const initialState: IState = {
  photos: null,
  page: 1,
  pages: 1,
  text: "",
  loading: false,
  error: false,
};

const SearchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeErr(state) {
      state.error = !state.error;
    },
  },
  extraReducers: {
    [getPhotos.pending.type]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getPhotos.fulfilled.type]: (state, { payload }) => {
      state.photos = payload.res.photo;
      state.page = payload.res.page;
      state.pages = payload.res.pages;
      state.text = payload.text;
      state.loading = false;
      state.error = false;
    },
    [getPhotos.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default SearchReducer.reducer;
export const { changeErr } = SearchReducer.actions;
