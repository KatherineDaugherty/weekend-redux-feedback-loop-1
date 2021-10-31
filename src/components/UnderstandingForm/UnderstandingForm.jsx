import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Route, HashRouter as Router, Link } from "react-router-dom";

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
        //console.log("clicked");
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
          {/* <Route path="/" exact> */}
          <input
            onChange={handleUnderstandingChange}
            type="number"
            value={inputObject.understanding}
            placeholder="Understanding?"
          />
          {/* <button type="submit">Next</button> */}
          
          <nav ><Link to="/support" type="submit"></Link><button type="submit">Next</button></nav>
          
          </form>
        
        );
  
  }


export default UnderstandingForm;