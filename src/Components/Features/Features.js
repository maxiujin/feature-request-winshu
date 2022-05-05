import React from "react";
import "./Features.css";

const Features = (props) => {
  return (
    <ul className="feature-list">
      {props.features.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default Features;
