import React from "react";

function PhotoBox(props) {
  return (
    <div className="photo-box">
      <img src={props.url} alt={props.title} />
            <p>{props.explanation}</p>
    </div>
  );
}

export default PhotoBox;