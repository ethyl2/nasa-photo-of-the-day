import React from "react";

function Header() {
  return (
    <div className="header top-header">
        <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA logo" />
      <h1>
        NASA <span role="img" aria-label="rocket">🚀</span> APOD 
      </h1>
      <h2>Astronomy Picture of the Day</h2>
    </div>
  );
}

export default Header;