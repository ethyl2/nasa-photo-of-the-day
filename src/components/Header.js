import React from "react";
import styled from "styled-components";

function Header() {

  const TopHeader = styled.div`
    margin: 0 auto 3rem auto;
    background: black;
    color: white;
    padding: 2rem;
  `;

  return (
    <TopHeader >
        <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA logo" />
      <h1>
        NASA <span role="img" aria-label="rocket">🚀</span> APOD 
      </h1>
      <h2>Astronomy Picture of the Day</h2>
    </TopHeader>
  );
}

export default Header;