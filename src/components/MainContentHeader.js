import React from "react";
import styled from "styled-components";

function MainContentHeader( { date, title }) {

  const PhotoHeader = styled.div`
    width: 80%;
    margin: 2rem auto;
    background: #0B3D91;
    padding: 2rem;
    color: white;
    line-height: 5rem;
  `;

  let dateToDisplay = date;
  
  if (date) {
    let myDateObj = new Date(date);
    myDateObj.setDate(myDateObj.getDate() + 1);
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    dateToDisplay = myDateObj.toLocaleDateString("en-US", options);
    }

  return (
    <PhotoHeader >
      <h1>
        {dateToDisplay ? dateToDisplay: date}
      </h1>
      <h2>
        {title}
      </h2>
    </PhotoHeader>
  );
}

export default MainContentHeader;