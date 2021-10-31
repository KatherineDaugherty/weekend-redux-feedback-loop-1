import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Route, HashRouter as Router, Link } from "react-router-dom";

function CommentsForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

    const handleCommentsChange = (event) => {
        //console.log("clicked");
        setInputObject({
          ...inputObject,
          comments: event.target.value,
        });
    };

    const collectCommentsInput = (event) => {

        event.preventDefault();
    
        dispatch({
          type: "ADD_COMMENTS",
          payload: inputObject.comments,
        });
        history.push("/review");
    };

    return (
      
        <form onSubmit={(event) => collectCommentsInput(event)}>
          {/* <Route path="/" exact> */}
          <input
            onChange={handleCommentsChange}
            type="text"
            value={inputObject.comments}
            placeholder="Comments?"
          />
          {/* <button type="submit">Next</button> */}
          <nav ><Link to="/review" type="submit"></Link><button type="submit">Next</button></nav>
          </form>
        
        );
  
  }


export default CommentsForm;