import React, { useState } from "react";

const CheckList = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheck = ()=> {
    // simulate a delay in state change
    setTimeout(() => {
      setChecked((prevChecked) => !prevChecked);
    }, 2000);
  }

  return (
    <div>
      <h2>2. Async CheckList</h2>
      <input type="checkbox" onChange={handleCheck} id="check-box" data-testid="check-box"/>
      <label htmlFor="check-box">{isChecked.toString()}</label>
    </div>
  );
};

export default CheckList;
