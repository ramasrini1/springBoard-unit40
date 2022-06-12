import React, {useState} from "react";
import DisplayContent from './DisplayContent';
import "./Form.css";


const MadiLibsForm = () => {
  const INITIAL_STATE = {
    noun1: '',
    noun2: '',
    adjective: '',
    color: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const[showContent, setShowContent] = useState(false);
  
  let jsx = "";
  
  function displayContent(){
    setShowContent(true);
  }

  function showForm(){
    setFormData(INITIAL_STATE);
    setShowContent(false);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ( {
      ...formData,
      [name]: value 
    } ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    displayContent();
  }
 
  const resetForm = () => {
    setFormData(INITIAL_STATE);
  }

  if (showContent){
    jsx = <div className="storyContent">
      <DisplayContent 
        noun1={formData.noun1} 
        noun2={formData.noun2}
        adjective={formData.adjective}
        color={formData.color}
        showForm={showForm}
      />
      </div>
  } 
  else { //Show the form
    jsx = 
    <form onSubmit={handleSubmit}>
      {/* <label>Noun1</label> */}
      <div className="field1">
      <input 
        id="noun1" 
        type="text" 
        name="noun1"
        placeholder="Enter Noun1" 
        value={formData.noun1} 
        onChange={handleChange}
        required="required"
      />
      {/* <label htmlFor="noun2">Noun2</label> */}
      <input 
        id="noun2" 
        type="text" 
        name="noun2"
        placeholder="Enter Noun2"
        value={formData.noun2} 
        onChange={handleChange}
        required="required"
      />
      {/* <label htmlFor="adjective">Adjective</label> */}
      <input 
        id="adjective" 
        type="text" 
        name="adjective"
        placeholder="Enter Adjective"
        value={formData.adjective} 
        onChange={handleChange}
        required="required"
      />
      {/* <label htmlFor="color">Color</label> */}
      <input 
        id="color" 
        type="text" 
        name="color"
        placeholder="Enter Color"
        value={formData.color} 
        onChange={handleChange}
        required="required"
      />
     
      <button className="storyBtn">Get Story</button>
      </div>
    </form>
  }

  return (
    <div className="form-box">
      {jsx}
    </div>
  )
}

export default MadiLibsForm;