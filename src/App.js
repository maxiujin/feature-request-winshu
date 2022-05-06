import React, { useState } from "react";

import "./App.css";

import Features from "./Components/Features/Features";
import NewFeatures from "./Components/NewFeatures/NewFeatures";
import logo from "./resources/winshu-brand-logo.png";

const App = () => {
  const [featureRequests, setFeatureRequest] = useState([
    { id: "x1", text: "Can we have an air lion next?" },
    { id: "x2", text: "Let's have a single player mode." },
    { id: "x3", text: "Can we get new maps?" },
  ]);

  const addNewFeatureHandler = (newFeature) => {
    // setFeatureRequest(featureRequests.concat(newFeature))

    // setFeatureRequest((prevFeatureRequest) => {
    //   return prevFeatureRequest.concat(newFeature)
    // });

    setFeatureRequest((prevFeatureRequest) =>
      prevFeatureRequest.concat(newFeature)
    );
  };
  return (
    <div className="Top">
      <img src={logo} alt="brand"></img>
      <NewFeatures onAddFeature={addNewFeatureHandler} />

      <Features features={featureRequests} />
    </div>
  );
};

export default App;
