import React from "react";
import { useNavigate } from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="back">
        <button onClick={handleClick}>Go Home</button>
      </div>
      <div className="err-code">Error Occured: Enter a valid zipcode</div>
    </>
  );
}
