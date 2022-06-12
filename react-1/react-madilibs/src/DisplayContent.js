import React from "react";
import {fillTemplate} from './FillTemplate';

function DisplayContent({noun1, noun2, adjective, color, showForm}) {
 
  function restart(){
    showForm();
  }

  return (
    <div>
      <h2>{ fillTemplate(noun1, noun2, adjective, color) } </h2>
      <button className="restartBtn" onClick={restart}>Restart</button>
    </div>
   
  );
}

export default DisplayContent;
