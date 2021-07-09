import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { AppDispatch } from "../../../reducers/store";
import { getPhotos } from "../../../reducers/SearchReducer";
import PagiNation from "../../Pagination/Pagination";

const SearchHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const getData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value.length > 1) {
      const obj = {
        text: inputRef.current.value,
        page: 1,
      };

      dispatch(getPhotos(obj));
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="d-flex justify-content-between align-items-center mx-5 px-5 mt-1 mb-2">
      <form className="d-flex" onSubmit={getData}>
        <Input
          minLength={2}
          type="text"
          innerRef={inputRef}
          placeholder="search photos"
        />
        <Button type="submit" color="secondary">
          Search
        </Button>
      </form>

      <PagiNation />
    </div>
  );
};

export default SearchHeader;
