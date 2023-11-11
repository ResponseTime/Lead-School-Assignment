import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const handle = () => {
    console.log(text);
    if (isNaN(text) || text === undefined) {
      alert("Enter A Zipcode to proceed");
      return;
    }
    navigate("/main", { state: { code: text } });
  };
  const keyPress = (event) => {
    if (event.key === "Enter" && text !== undefined && !isNaN(text)) {
      navigate("/main", { state: { code: text } });
    } else if (event.key === "Enter" && (text === undefined || isNaN(text))) {
      alert("Enter A Zipcode to proceed");
    }
  };
  const validateText = (event) => {
    setText(parseInt(event.target.value));
  };

  return (
    <>
      <div className="search" onKeyDown={keyPress}>
        <div className="heading">Zip Code Information App</div>
        <input
          type="number"
          placeholder="Enter Zipcode Code"
          onChange={validateText}
        />
        <button onClick={handle}>Submit</button>
      </div>
    </>
  );
}
