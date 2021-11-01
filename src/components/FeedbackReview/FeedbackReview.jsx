import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function FeedbackReview() {

  const history = useHistory();

  const feedbackInput = useSelector((store) => store.inputReducer);

  //when submit button clicked, post to DB & send to success page
  const handleSubmit = () => {

    console.log('clicked');

    //post to server
    axios.post('/feedback', feedbackInput)
      .then(response => {
        console.log('posted', response)
      }).catch(error => {
        console.log('error', error)
      })
    history.push('/success');
  }

  return (
    <>
      <h2>Review your feedback</h2>
      <p>Feelings: {feedbackInput.feeling}</p>
      <p>Understanding: {feedbackInput.understanding}</p>
      <p>Support: {feedbackInput.support}</p>
      <p>Comments: {feedbackInput.comments}</p>

      <button onClick={handleSubmit}>Submit</button>

    </>
  )

}

export default FeedbackReview;