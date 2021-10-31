import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SupportForm () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [inputObject, setInputObject] = useState({
        feeling: "",
        understanding: "",
        support: "",
        comments: "",
    });

    const handleSupportChange = (event) => {
        setInputObject({
          ...inputObject,
          support: event.target.value,
        });
    };

    const collectSupportInput = (event) => {

        event.preventDefault();
    
        dispatch({
          type: "ADD_SUPPORT",
          payload: inputObject.support,
        });
        history.push('/comments');
    };

    return (
      
        <form onSubmit={(event) => collectSupportInput(event)}>
          <input
            onChange={handleSupportChange}
            type="number"
            value={inputObject.support}
            placeholder="Support?"
          />
          <button type="submit">Next</button>
          </form>
        
        );
  
  }


export default SupportForm;