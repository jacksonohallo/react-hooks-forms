import React from "react";


function Form(props) {
  
  return (

    <form>
  
    <input
      
      type="text"
      onChange={props.handleFirstNameChange}
      value={props.firstName}
      />

    <input
    type="text"
      onChange={props.handleLasttNameChange}
value={props.lastName}
    
    
/>




    <button   type="submit">submit</button>
    </form>

  );

}



export default Form;
