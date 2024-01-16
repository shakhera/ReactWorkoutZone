import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {
  const newsDetails = useLoaderData();
  const { title, details, image_url, category_id } = newsDetails;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/cetagories/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft>All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
