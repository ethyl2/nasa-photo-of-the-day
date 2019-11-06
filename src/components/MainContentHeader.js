import React from "react";

function MainContentHeader( { date, title }) {

  let dateToDisplay = date;
  if (date) {
    const myDateObj = new Date(date);
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    dateToDisplay = myDateObj.toLocaleDateString("en-US", options);
    }

  return (
    <div className="header">
      <h1>
        {dateToDisplay}
      </h1>
      <h2>
        {title}
      </h2>
    </div>
  );
}

export default MainContentHeader;