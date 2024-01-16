import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaBookmark,
  FaShareAlt,
  FaEye,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    details,
    image_url,
    total_view,
    thumbnail_url,
    rating,
    _id,
  } = news;
  return (
    <div>
      <Card className="text-center mb-3">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-3 me-auto">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("yyyy-MM-D")}
              </small>
            </p>
          </div>
          <div className="">
            <FaBookmark /> <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center ">
          <div className="me-auto">
            <Rating
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-danger"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span> {rating?.number}</span>
          </div>
          <div>
            <FaEye> </FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
