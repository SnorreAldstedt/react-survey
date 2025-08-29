import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList}) {
  console.log("Inside AnswersList: ", answersList);

  //const { answersList } = props;

  return (
    <section className={`survey__list ${open ? "" : ""}`}>
        <h2>Answers list</h2>
        <div className="table-responsive">
            {answersList.map((v) => (
              <div className="answer-div" key={v.id}> 
                <h3>{v.username} said: </h3>
                <br/>
                <p>How do you rate your rubber duck colour?</p>
                <p>&emsp; {v.colourRating}</p>
                <p>How do you like to spend time with your rubber duck</p>
                <p>&emsp; Likes to: {v.bathing ? "Bath, ": ""}{v.swimming ? "Swim, ": ""}{v.chatting ? "Chat, ": ""}{v.noTime ? "Do nothing, ": ""} with the rubber duck</p>
                <p>Other Thoughts:</p>
                <p>&emsp; {v.review}</p>
              </div>  
            ))} 
        </div>
      </section>
  );
}


