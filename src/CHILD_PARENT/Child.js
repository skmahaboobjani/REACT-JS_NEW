import React from "react";

function Child({ handle }) {
  let name = "skmahaboob jani";

  return (
    <div>
      <h1>iam child</h1>
      <button onClick={() => handle(name)}>
        send data from child to parent
      </button>
    </div>
  );
}
export default Child;
