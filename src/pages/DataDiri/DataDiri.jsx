import React, { useState } from "react";
import ChildData from "./ChildData";
import ava from "../../assets/avatar.jpg ";
function DataDiri() {
  const [name, setName] = useState("Resha");
  const [avatar, setAvatar] = useState(ava);
  const [alamat, setAlamat] = useState("Bandung");
  return (
    <div>
      <ChildData name={name} avatar={avatar} alamat={alamat} />
    </div>
  );
}

export default DataDiri;
