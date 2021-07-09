import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { AppDispatch } from "reducers/store";
import { addPhoto } from "reducers/BookmarksReducer";
import { IPhoto } from "types";

interface IProp {
  pic: IPhoto;
}

const InputTags = ({ pic }: IProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatchPhoto = (obj: IPhoto) => {
    const newPic = { ...obj };
    const inputElem = inputRef.current;

    if (inputElem && inputElem.value.length > 0) {
      newPic.userTags = inputElem.value;
    }

    dispatch(addPhoto(newPic));
  };

  return (
    <>
      <input
        className="my-1 w-100"
        type="text"
        ref={inputRef}
        placeholder="add some tags?"
      />
      <br />
      <Button onClick={() => dispatchPhoto(pic)}>Bookmark it!!</Button>
    </>
  );
};

export default InputTags;
