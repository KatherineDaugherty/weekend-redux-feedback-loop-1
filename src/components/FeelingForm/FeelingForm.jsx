import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function FeelingForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

    const handleFeelingChange = (event) => {
        setInputObject({
          ...inputObject,
          feeling: event.target.value,
        });
    };

    const collectFeelingInput = (event) => {

        event.preventDefault();
    
        dispatch({
          type: "ADD_FEELING",
          payload: inputObject.feeling,
        });
        history.push("/understanding");
    };

    return (
      
        <form onSubmit={(event) => collectFeelingInput(event)}>
          <h3>How are you feeling today?</h3>
          <input
            onChange={handleFeelingChange}
            type="number"
            value={inputObject.feeling}
            placeholder="Feeling?"
          />
          <nav ><Link to="/understanding" type="submit"></Link><button type="submit">Next</button></nav>
          </form>
        
        );
  
  }

export default FeelingForm;