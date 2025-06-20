import React, { memo } from "react";

function C({ learning }) {
  console.log("child rendering");
  return <div></div>;
}
export default memo(C);
