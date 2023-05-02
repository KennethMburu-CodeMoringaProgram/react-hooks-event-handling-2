import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      {/* <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick}>Button 2</button>
      <button onClick={handleClick}>Button 3</button> */}
      <button onClick={() => handleClick(1)}>btn 1</button>
      <button onClick={() => handleClick(2)}>btn 2</button>
      <button onClick={() => handleClick(3)}>btn 3</button>
    </div>
  );
}

export default MultiButton;
