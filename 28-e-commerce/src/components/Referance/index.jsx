import { forwardRef, useState } from "react";

const Referance = forwardRef(function Referance({ name }, ref) {
  console.log(name);
  return <input type="text" ref={ref} />;
});

export default Referance;
