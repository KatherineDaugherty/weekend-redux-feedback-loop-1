import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function FeedbackForm () {

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

    const handleUnderstandingChange = (event) => {
        //console.log("clicked");
        setInputObject({
          ...inputObject,
          understanding: event.target.value,
        });
    };

    const handleSupportChange = (event) => {
        //console.log("clicked");
        setInputObject({
          ...inputObject,
          support: event.target.value,
        });
    };

    const handleCommentsChange = (event) => {
        //console.log("clicked");
        setInputObject({
          ...inputObject,
          comments: event.target.value,
        });
    };

    // const feelingInput = useSelector((store) => store.feelingReducer);
    // const understandingInput = useSelector((store) => store.understandingReducer);
    // const supportInput = useSelector((store) => store.supportReducer);
    // const commentInput = useSelector((store) => store.commentReducer);

    //console.log(feelingInput);

    //this may be redundant???? Could maybe just use one reducer??
    const collectInputs = (event) => {

        event.preventDefault();
    
        dispatch({
          type: "ADD_FEELING",
          payload: inputObject,
        });

        dispatch({
            type: "ADD_UNDERSTANDING",
            payload: inputObject,
        });

        dispatch({
            type: "ADD_SUPPORT",
            payload: inputObject,
        });

        dispatch({
            type: "ADD_COMMENT",
            payload: inputObject,
        });
        //this was the for the total price reducer?? don't really understand
        // dispatch({ type: "CREATE_ORDER", payload: pizzas });
        // setOrderToAdd({
        //   name: "",
        //   address: "",
        //   city: "",
        //   zipCode: "",
        //   type: "",
        // });

        //history.push("/checkout");
      };

    return (
        <form onSubmit={(event) => collectInputs(event)}>
          <input
            onChange={handleFeelingChange}
            type="number"
            value={inputObject.feeling}
            placeholder="Feeling?"
          />
          <button type="submit">Next</button>
    
          <input
            onChange={handleUnderstandingChange}
            type="number"
            value={inputObject.understanding}
            placeholder="Understanding?"
          />
          <button type="submit">Next</button>

          <input
            onChange={handleSupportChange}
            type="number"
            value={inputObject.support}
            placeholder="Support?"
          />
          <button type="submit">Next</button>

          <input
            onChange={handleCommentsChange}
            type="text"
            value={inputObject.comments}
            placeholder="add comments"
          />
          <button type="submit">Next</button>

        </form>
      );

}

export default FeedbackForm;