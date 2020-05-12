import React from "react";

const time = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
function DateTime(props) {
  return (
    <div className="date" style={{ fontSize: "11px" }}>
      {time.toLocaleDateString("en-US", options)}
    </div>
  );
}

export default DateTime;
