import React from "react";
import styled from "styled-components";

function Footer() {

  const FooterDiv = styled.div`
    background: black;
    color: white;
    margin: 0 auto;
    p {
    font-size: 1.5rem;
    }
  `;

  return (
    <FooterDiv>
        <hr />
        <p>
            Image and text content is from NASA APOD <span role="img" aria-label="rocket">🚀</span>
        </p>
        <p>Site created by Heather Nuffer 2019</p>
    </FooterDiv>
  );
}

export default Footer;