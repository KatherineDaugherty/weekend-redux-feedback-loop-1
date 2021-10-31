import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SupportForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

    const handleSupportChange = (event) => {
        setInputObject({
          ...inputObject,
          support: event.target.value,
        });
       
    };

    const collectSupportInput = (event) => {

        event.preventDefault()
        
          dispatch({
            type: "ADD_SUPPORT",
            payload: inputObject.support,
          });
        
          if (inputObject.support === "") {
            alert("you must fill out form before proceeding")
          }
          else{
            history.push('/comments');
          }
    };

    return (
      
        <form onSubmit={(event) => collectSupportInput(event)}>
          <h3>How well are you being supported?</h3>
          <input
            onChange={handleSupportChange}
            type="number"
            min="0"
            max="5"
            value={inputObject.support}
            placeholder="Support?"
          />
          <button type="submit">Next</button>
          </form>
        
        );
  
  }


export default SupportForm;