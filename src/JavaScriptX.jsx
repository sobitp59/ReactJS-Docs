import React from "react";

const myself = {
  firstName: "Sobit",
  middleName: "Kumar",
  lastName: "Prasad",
};

function formatUser(myself) {
  return myself.firstName + " " + myself.middleName + " " + myself.lastName;
}

const element = (
  <>
    <h3>Hello! {formatUser(myself)}</h3>
    <h4>Glad to see you here</h4>
  </>
);


function JavaScriptX() {
  return (
      <>
      <h2>JSX BASICS --02--</h2>
      {element}
      <hr />
      </>
  );
}

export default JavaScriptX;
