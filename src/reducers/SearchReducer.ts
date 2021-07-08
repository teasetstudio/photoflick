import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPhoto } from "../types";

// async functions
export const getPhotos = createAsyncThunk<IPhoto[], string>(
  "home/getCovidStat",
  async (text) => {
    const res = await axios.get(
      `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=664f5f15f8352ba837becfa4585e3e2e&tags=${text}&format=json&nojsoncallback=1`
    );
    return res.data.photos.photo;
  }
);

// REDUCER
interface IState {
  photos: IPhoto[] | null;
  loading: boolean;
  error: boolean;
}
const initialState: IState = {
  photos: null,
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
    [getPhotos.fulfilled.type]: (state, action) => {
      state.photos = action.payload;
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
