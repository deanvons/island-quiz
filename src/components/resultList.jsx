import { useDispatch, useSelector } from "react-redux";
import { updateAnswerAction } from "../redux-parts/questionState";

export function ResultList() {
  const dispatch = useDispatch();

  const question = useSelector((store) => store.question);
  function updateQuestionState() {
    dispatch(updateAnswerAction("Redux is mreh"));
  }
  return (
    <div onClick={updateQuestionState}>
      <h1>{question.correctAnswer}</h1>
    </div>
  );
}
