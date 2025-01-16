export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const UPDATE_ANSWER = "UPDATE_ANSWER";

export function updateQuestionAction(newQuestion) {
  return { type: UPDATE_QUESTION, payload: newQuestion};
}

export function updateAnswerAction(newAnswer) {
    return { type: UPDATE_ANSWER, payload: newAnswer };
  }

export function questionReducer(
  questionObject = {
    question:
      "What is the first thing you should do if you find yourself stranded on a deserted island?",
    options: [
      "Look for food",
      "Find or build shelter",
      "Signal for help",
      "Explore the island",
      "Explore the island",
    ],
    correctAnswer: "Find or build shelter",
  },
  action
) {
  switch (action.type) {
    case UPDATE_QUESTION:
      return { ...questionObject, question: action.payload };
      case UPDATE_ANSWER:
        return { ...questionObject, correctAnswer: action.payload };
    default:
      return questionObject;
  }
}
