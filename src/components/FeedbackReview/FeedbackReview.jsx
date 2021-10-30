import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

function FeedbackReview () {

    // get the input data from the store
    //const inputData = useSelector((store) => store.feelingReducer);
    //const cartPizzas = useSelector((store) => store.cartReducer);
    //console.log(store.feelingReducer);

    const feelingInput = useSelector((store) => store.feelingReducer);
    const understandingInput = useSelector((store) => store.understandingReducer);
    const supportInput = useSelector((store) => store.supportReducer);
    const commentInput = useSelector((store) => store.commentReducer);

  return (
    <>
    <p>{feelingInput.feeling}</p>
    <p>{feelingInput.understanding}</p>
    <p>{feelingInput.support}</p>
    <p>{feelingInput.comments}</p>
    <button>Submit</button>
    </>
  )   

}

export default FeedbackReview;