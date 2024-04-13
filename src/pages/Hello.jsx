import React from "react";
import Navbar from "../components/Navbar";

const Hello = () => {
  return (
    <div className="hello" id="hello">
      <Navbar />
      <p>
        Hello! <br />
        I'm a Web Developper <br />
        and I believe that...
      </p>
      <h1>
        Coding <br />
        <i>is Awesome!</i>
      </h1>
    </div>
  );
};

export default Hello;
