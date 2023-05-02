import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return (
    <div>
      {/* <button onClick={tickle}>Tickle me!</button> */}

      <button onClick={tickle}>Tickle me!</button>
    </div>
  )
}

export default Tickler;
