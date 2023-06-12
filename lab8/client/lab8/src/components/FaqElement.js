import "./FaqElement.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editFaqElement, deleteFaqElement } from "../actions";


const FaqElement = (props) => {
    const[isAnswer, setAnswer] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setQuestionAnswer] = useState("");
    const dispatch = useDispatch();

    const toggle = () => {
        setAnswer(!isAnswer);
    }
    const ondelete = () => {
        dispatch(deleteFaqElement(props.index));
    }

    const onEdit = () => {
        setEditMode(true);
        setQuestionAnswer(props.answer);
        setQuestion(props.question);
    }
    const onChangeAnswer = (event) => {
        setQuestionAnswer(event.target.value);
    }
    const onChangeQuestion = (event) => {
        setQuestion(event.target.value);
    }
    const onSave = (e) => {
        e.preventDefault();
        setEditMode(false);
        dispatch (editFaqElement(props.index,question,answer));
    }
    return(
        <>
            {isEditMode ? (
                <li className="faq-element">
                    <form onSubmit={onSave}>
                        <label>
                            Question:<input name="question" value={question} onChange={onChangeQuestion}/>
                        </label>
                        <label>
                            Answer:<textarea name="answer" value={answer} onChange={onChangeAnswer}/>
                        </label>
                        <input type="submit" value="Save" />
                    </form>
                </li>
            ) : (
                <li className="faq-element">
                    <h2 className ="question" onClick={toggle}>{props.question}</h2>
                    {isAnswer && <p>{props.answer}</p>}
                    <button onClick={ondelete}>Delete</button>
                    <button onClick={onEdit}>Edit</button>
                </li>
            )}
        </>
    )
}

FaqElement.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}


export default FaqElement;