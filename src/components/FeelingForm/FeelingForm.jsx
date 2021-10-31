import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Route, HashRouter as Router, Link } from "react-router-dom";

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
        //console.log("clicked");
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
          {/* <Route path="/" exact> */}
          <input
            onChange={handleFeelingChange}
            type="number"
            value={inputObject.feeling}
            placeholder="Feeling?"
          />
          {/* <button type="submit">Next</button> */}
          <nav ><Link to="/understanding" type="submit"></Link><button type="submit">Next</button></nav>
          </form>
        
        );
  
  }


export default FeelingForm;