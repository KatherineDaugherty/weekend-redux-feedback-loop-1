import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import { useState } from "react";


function FeedbackSuccess () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

// const dispatch = useDispatch();

const clearInputs = (event) => {
    event.preventDefault();
    dispatch({type: 'CLEAR_FEEDBACK', payload: inputObject, });
}

return (
    
    <button onClick={clearInputs}>Leave New Feedback</button>
    
)    

}

export default FeedbackSuccess;