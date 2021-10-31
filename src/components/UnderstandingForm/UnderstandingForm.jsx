import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function UnderstandingForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

    const handleUnderstandingChange = (event) => {
        setInputObject({
          ...inputObject,
          understanding: event.target.value,
        });
    };

    const collectUnderstandingInput = (event) => {

        event.preventDefault();
    
        dispatch({
          type: "ADD_UNDERSTANDING",
          payload: inputObject.understanding,
        });
        history.push("/support");
    };

    return (
      
        <form onSubmit={(event) => collectUnderstandingInput(event)}>
          <h3>How well are you understanding the content?</h3>
          <input
            onChange={handleUnderstandingChange}
            type="number"
            value={inputObject.understanding}
            placeholder="Understanding?"
          />
          
          <nav ><Link to="/support" type="submit"></Link><button type="submit">Next</button></nav>
          
          </form>
        
        );
  
  }


export default UnderstandingForm;