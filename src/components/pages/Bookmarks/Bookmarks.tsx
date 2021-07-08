import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/store";
import Photolist from "../../Photolist/Photolist";

const Bookmarks = () => {
  const photos = useSelector((state: RootState) => state.bookmarks.photos);

  return (
    <div className="page">
      {photos.length > 0 ? (
        <Photolist photos={photos} />
      ) : (
        <p>
          You don`t have any bookmarks. You can add them on the Search page.
        </p>
      )}
    </div>
  );
};

export default Bookmarks;
