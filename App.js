import React from "react";
import ReactDOM from "react-dom/client";


const ele = (
  <h1>
    this a JSX Element %%%%%%%%%%%%%%%%%%
  </h1>
);

const Fn = () => (
  ele
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fn />);