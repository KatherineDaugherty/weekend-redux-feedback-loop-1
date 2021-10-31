import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";


function FeedbackSuccess () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

const clearInputs = (event) => {
    event.preventDefault();
    dispatch({type: 'CLEAR_FEEDBACK', payload: inputObject, });
    history.push('/');
}

return (
    
    <nav ><Link to="/" type="submit"></Link><button onClick={clearInputs}>Leave New Feedback</button></nav>
 
)    

}

export default FeedbackSuccess;