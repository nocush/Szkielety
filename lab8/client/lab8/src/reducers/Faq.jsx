import {useState} from 'react';
import FaqElement from '../components/FaqElement';
import { addFaqElement } from '../actions';
import {useSelector, useDispatch} from 'react-redux';

function Faq() {
    const faqList = useSelector((state) => state.faq);
    const dispatch = useDispatch();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (event) => {
    setAnswer(event.target.value);
  }
  const onChangeQuestion = (event) => {
    setQuestion(event.target.value);
  }


  const onSubmit = (event) => {
    event.preventDefault();
    setQuestion("");
    dispatch(addFaqElement(question,answer));
    setAnswer("");
  }
  return (
    <div>
    <ul>
      {faqList.map((elem,index)=>(
        <FaqElement key={index} question={elem.question} answer={elem.answer} index={index}/>
      ))}
    </ul>
    <form onSubmit={onSubmit}>
      <label>
        Question:{" "}<input name="question" type="text" value={question} onChange={onChangeQuestion}/>
      </label>
      <label>
        Answer:{" "}<textarea name="answer" value={answer} onChange={onChangeAnswer}/>
      </label>
      <input type="submit" value="Add" />
    </form>
    </div>
  );
}

export default Faq;
