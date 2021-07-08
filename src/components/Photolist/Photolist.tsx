import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../reducers/store";
import { addPhoto, removePhoto } from "../../reducers/BookmarksReducer";
import { IPhoto } from "../../types";
import "./photolist.scss";

const imgUrl = (pic: IPhoto): string =>
  `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;

interface IProp {
  photos: IPhoto[];
}

const Photolist = ({ photos }: IProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const savedphotos = useSelector((state: RootState) => state.bookmarks.photos);

  return (
    <div className="photos-list">
      <Row>
        {photos &&
          photos.map((pic: IPhoto) => (
            <Col key={pic.id} sm="3">
              <div className="photos-list__item">
                <Card>
                  <CardImg top src={imgUrl(pic)} alt="No Image" />
                  <CardBody className="text-center">
                    <CardTitle tag="h6">{pic.title}</CardTitle>

                    {savedphotos.map((i) => i.id).indexOf(pic.id) < 0 ? (
                      <Button onClick={() => dispatch(addPhoto(pic))}>
                        Bookmark it!!
                      </Button>
                    ) : (
                      <Button onClick={() => dispatch(removePhoto(pic))}>
                        Remove It
                      </Button>
                    )}
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Photolist;
