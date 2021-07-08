import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../reducers/store";
import { getPhotos } from "../../../../reducers/SearchReducer";
import "./searchpanel.scss";

const SearchHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const getData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value.length > 1) {
      dispatch(getPhotos(inputRef.current.value));
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <form className="search-header" onSubmit={getData}>
      <input
        minLength={2}
        type="text"
        ref={inputRef}
        placeholder="search photos"
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchHeader;
