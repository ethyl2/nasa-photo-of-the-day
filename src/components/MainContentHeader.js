import React from "react";

function MainContentHeader( { date, title }) {
  return (
    <div className="header">
      <h1>
        {date} 
      </h1>
      <h2>
        {title}
      </h2>
      <hr />
    </div>
  );
}

export default MainContentHeader;