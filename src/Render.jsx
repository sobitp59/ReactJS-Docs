import React from "react";
// import  ReactDOM  from "react-dom";

function Render() {
  return (
    <>
      <h2>Hi! This is Render Exercise --03--</h2>
      <h4>Time Now : {new Date().toLocaleTimeString()}</h4>
      <hr />
      {/* For updating we need to learn hooks */}
    </>
  );
}
// setInterval(Render, 1000);

export default Render;
