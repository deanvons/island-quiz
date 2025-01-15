import { useReducer } from "react";
import { useState } from "react";


export function Question() {


  function questionReducer(question,action){
        switch(action.type){
          case "UPDATE_QUESTION":
              return {...question,question:action.payload}
          default:
          return question
        }
  }


 
    // question data
    const [question,dispatch] = useReducer(questionReducer,{
        question: "What is the first thing you should do if you find yourself stranded on a deserted island?",
        options: [
          "Look for food",
          "Find or build shelter",
          "Signal for help",
          "Explore the island",
          "Explore the island"
        ],
        correctAnswer: "Find or build shelter"
      })

      const optionList = question.options.map(option => <li>{option}</li>)

    // way to answer the question

    // show next
    function updateQuestion(){
      dispatch({type:"UPDATE_QUESTION", payload:"Why reducers"})
    }

    // way to store the results

  return (
    <div>
        <h1>{question.question}</h1>
        <ul>
            {optionList}
        </ul>
      <button onClick={updateQuestion}>Next</button>
    </div>
  );
}
