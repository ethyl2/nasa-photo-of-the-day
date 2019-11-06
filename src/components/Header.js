import React from "react";

function Header() {
  return (
    <div className="header top-header">
      <h1>
        NASA <span role="img" aria-label="rocket">🚀</span> APOD 
      </h1>
      <h2>Astronomy Picture of the Day</h2>
      <hr />
    </div>
  );
}

export default Header;