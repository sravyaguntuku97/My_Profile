import React from "react";

function Classprops(props) {
  const { name, age, role, id, details } = props;
  const detail = props.details;
  console.log("props details::::::::", detail);
  const handleRemove = () => {
    console.log("testing of function", id);
  };

  return (
    <div
      style={{ textAlign: "center", border: "2px solid black", margin: "1rem" }}
    >
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{role}</h1>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
}

export default Classprops;
