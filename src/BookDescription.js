import "./BookDescription.css";
import React from "react";

function BookDescription(props) {
  const {
    title,
    isbn,
    longDescription,
    pageCount,
    thumbnailUrl,
    authors
  } = props.location.state;
  console.log(props.location.state);
  return (
    <div className="BookDescription">
    <h2>{title}</h2>
      <div className="TopSection">
        <div className="thumbnail">
          <img src={thumbnailUrl} />
        </div>
        <div className="shortDescription">

          <p>Title: {title}</p>
          <p>ISBN: {isbn}</p>
          <p>Page Count: {pageCount}</p>
          <p>Authors: {authors.join(', ')} </p>
          
        </div>
      </div>
      <div className="itemDetail">
      <h2>Description</h2>
      {longDescription}
      </div>
    </div>
  );
}

export default BookDescription;
