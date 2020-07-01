import React from "react";

function ChildData(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.avatar} alt="avatar" />
      <h1>{props.alamat}</h1>
    </div>
  );
}

export default ChildData;
