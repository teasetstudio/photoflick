import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import Photolist from "components/Photolist/Photolist";
import { RootState } from "reducers/store";
import SearchHeader from "./SearchHeader";

const Search = () => {
  const photos = useSelector((state: RootState) => state.search.photos);
  const loading = useSelector((state: RootState) => state.search.loading);

  return (
    <div className="page">
      <SearchHeader />

      {loading && <Spinner color="dark" />}

      {photos && photos.length > 0 ? (
        <Photolist photos={photos} />
      ) : (
        <p>No images here. Would you try to search for anything else?</p>
      )}
    </div>
  );
};

export default Search;
