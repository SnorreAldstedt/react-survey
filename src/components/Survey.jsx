import { useState } from "react";
import AnswersList from "./AnswersList";
import ColourRating from "./ColourRating";

function Survey() {

  const [open, setOpen] = useState(false); //Ignore this state

  const [answersList, setAnswersList] = useState([]);
  const [surveyData, setSurveyData] = useState({
    colourRating: "",
    bathing: false,
    swimming: false,
    chatting: false,
    noTime: false,
    review: "",
    username: "",
    email:  ""
  })

  const handleChange = (event) => {
  const { name, value, type } = event.target;
    if (type === "checkbox") {
      setSurveyData({ ...surveyData, [name]: event.target.checked });
    }
    else {
      setSurveyData({ ...surveyData, [event.target.name]: event.target.value });
    }
    console.log(surveyData);
  };

 const handleSubmit = (event) => {
    event.preventDefault();

    console.log(surveyData);

    setAnswersList([
      ...answersList,
      {
        id: answersList.length === 0 ? 1 : Math.max(...answersList.map((o) => o.id + 1)),
        colourRating: surveyData.colourRating,
        bathing: surveyData.bathing,
        swimming: surveyData.swimming,
        chatting: surveyData.chatting,
        noTime: surveyData.noTime,
        review: surveyData.review,
        username: surveyData.username,
        email: surveyData.email
      },
    ]);
    console.log(answersList);
    setSurveyData({
      colourRating: "",
      bathing: false,
      swimming: false,
      chatting: false,
      noTime: false,
      review: "",
      username: "",
      email:  ""
    });
  };


  

  return (
    <main className="survey">
      <AnswersList answersList={answersList}/>
      <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <h3>How do you rate your rubber duck colour?</h3>
          <ColourRating handleChange={handleChange}/>
          <h3>How do you like to spend time with your rubber duck</h3>
          <div className="form_group">
            <ul>
              <li>
                <label
                  ><input
                    name="swimming"
                    type="checkbox"
                    onChange={handleChange}
                    checked={surveyData.swimming}
                  />Swimming</label
                >
              </li>
              <li>
                <label>
                  <input 
                    name="bathing" 
                    type="checkbox" 
                    onChange={handleChange}
                    checked={surveyData.bathing}/>
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="chatting"
                    type="checkbox"
                    onChange={handleChange}
                    checked={surveyData.chatting}/>
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="noTime" 
                    type="checkbox" 
                    onChange={handleChange}
                    checked={surveyData.noTime} />
                    I don't like to spend time with it
                  </label>
              </li>
            </ul>
          </div>                    
          <div>
            <label>
              What else have you got to say about your rubber duck?
              <textarea 
                name="review" 
                cols="30" 
                rows="10"
                value={surveyData.review}
                onChange={handleChange}>
              </textarea>
            </label>
          </div>
          <br/>
          <div>
            <label>
              Put your name here (if you feel like it):
              <input 
                type="text" 
                name="username" 
                value={surveyData.username}
                onChange={handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Leave us your email pretty please??
              <input 
              type="email" 
              name="email" 
              value={surveyData.email}
              onChange={handleChange} />
            </label>
          </div>
          <input className="form__submit" type="submit" value="Submit Survey!"/>
      </form>
    </main>
  );
}

export default Survey;
