import React from "react";
import styled from "styled-components";

function PhotoBox(props) {

  const PhotoDiv = styled.div`
    width: 70%;
    margin: 2rem auto;
    background: #EDCAA6;
    padding: 3rem;
    p::first-letter {
      font-size: 200%;
      color: #0B3D91;
    }
    img {
      max-width: 100%;
    }
  `;

  return (
    <PhotoDiv>
      <img src={props.url} alt={props.title} />
            <p>{props.explanation}</p>
    </PhotoDiv>
  );
}

export default PhotoBox;