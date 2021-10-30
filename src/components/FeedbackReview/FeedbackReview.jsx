import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

function FeedbackReview () {

    const feelingInput = useSelector((store) => store.feelingReducer);

    //when submit button clicked, post to DB & send to success page
    const handleSubmit = () => {

        console.log('clicked');
      
        //post to server
        axios.post('/feedback', feelingInput)
        .then(response => {
        console.log('posted', response)
        }).catch (error => {
        console.log('error', error )
        })
    }

  return (
    <>
    <p>{feelingInput.feeling}</p>
    <p>{feelingInput.understanding}</p>
    <p>{feelingInput.support}</p>
    <p>{feelingInput.comments}</p>
    <button onClick={handleSubmit} >Submit</button>
    </>
  )   

}

export default FeedbackReview;