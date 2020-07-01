import React, { useState } from "react";
import ChildData from "../../components/ChildData/ChildData";
import ava from "../../assets/avatar.jpg";
function DataDiri() {
  const [name] = useState("Resha");
  const [avatar] = useState(ava);
  const [alamat] = useState("Bandung");
  return (
    <div>
      <ChildData name={name} avatar={avatar} alamat={alamat} />
    </div>
  );
}

export default DataDiri;
