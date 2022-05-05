import React, {useState} from "react";
import "./NewFeatures.css";

const NewFeatures = props => {
 
    const [enteredText, setEnteredText]= useState('');


  const addFeatureHandler = (event) => {
    event.preventDefault(); //dont send a server request

    const newFeature = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredText('')
    props.onAddFeature(newFeature);

  };


  const textChangeHandler = event => {
      setEnteredText(event.target.value);
  };

  
  return (
    <form className="new-feature" onSubmit={addFeatureHandler}>
      <input type="text"  value = {enteredText} onChange={textChangeHandler}/>
      <button type="submit">Add new feature</button>
    </form>
  );
};

export default NewFeatures;
