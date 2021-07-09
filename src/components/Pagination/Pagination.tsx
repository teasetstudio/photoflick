import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { AppDispatch, RootState } from "../../reducers/store";
import { getPhotos } from "../../reducers/SearchReducer";

type PagNum = {
  selected: number;
};

const PagiNation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchText = useSelector((state: RootState) => state.search.text);
  const pages = useSelector((state: RootState) => state.search.pages);

  const getData = ({ selected }: PagNum) => {
    console.log("next page", selected + 1);
    dispatch(getPhotos({ text: searchText, page: selected + 1 }));
  };

  return (
    <div>
      {pages > 1 && (
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          pageCount={pages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={getData}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      )}
    </div>
  );
};

export default PagiNation;
